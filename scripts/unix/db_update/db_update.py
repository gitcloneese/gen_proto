#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import re
import time
import platform
import optparse
import db_update_gen

PY_DIR = sys.path[0]
ROOT_DIR = os.path.join(PY_DIR, "../../..")
EBIN_DIR = os.path.join(ROOT_DIR, "_build/default/lib")
GAME_EBIN_DIR = os.path.join(EBIN_DIR, "mmo/ebin")
VM_DIR = os.path.join(ROOT_DIR, "_build", "default", "rel",
                      "mmo", "releases", "0.0.1", "vm.args")
RC_FILE = os.path.join(ROOT_DIR, "etc", "mmo.rc")
CONFIG_FILE = os.path.join(
    ROOT_DIR, "_build", "default", "rel", "mmo", "releases", "0.0.1", "sys.config")
GAME_SQL = os.path.join(ROOT_DIR, "scripts", "sql", "db_game.sql")
LOG_SQL = os.path.join(ROOT_DIR, "sql", "db_log.sql")
INIT_VERSION = 2019121700


def do_update_game(dogen, dosql, dopatch):
    erlname = "tmp_db_update_game"
    erlfile = os.path.join(PY_DIR, erlname+".erl")
    sqls = patchs = []

    if dogen:
        version = int(do_emysql("version_patch", "get_db_version", "default"))
        if version == 0:
            version = INIT_VERSION
        print "current version: %s" % version
        sqls, patchs = db_update_gen.main(GAME_SQL, erlfile, version)

    cmd = "erlc +nowarn_unused_vars -o %s %s " % (GAME_EBIN_DIR, erlfile)
    print(cmd)
    do_cmd(cmd)
    if dosql:
        do_sql(erlname, "do_sql", "default")

    if dopatch:
        if dogen and (patchs == [] or version == INIT_VERSION):
            print "patch nothing update!"
        else:
            do_patch(erlname)


def do_update_log(dogen, dosql, dopatch):
    erlname = "tmp_db_update_log"
    erlfile = os.path.join(PY_DIR, erlname+".erl")
    sqls = patchs = []

    if dogen:
        version = int(do_emysql("version_patch", "get_db_version", "log"))
        if version == 0:
            version = INIT_VERSION
        print "current version: %s" % version
        sqls, patchs = db_update_gen.main(LOG_SQL, erlfile, version)

    do_cmd("erlc +nowarn_unused_vars -o %s %s " % (GAME_EBIN_DIR, erlfile))
    if dosql:
        do_sql(erlname, "do_sql", "log")


def do_patch(erlname):
    wait_server()
    load_rc()
    cookie = load_cookie()
    name, ip = load_name_ip()
    print "do update patch"
    cmd = '/usr/local/opt/erlang@20/lib/erlang/lib/erl_interface-3.10.2.2/bin/erl_call -a "%s do_patch []" -c %s -n %s@%s' % (erlname,
                                                                                                                              cookie, name, ip)
    do_cmd(cmd)


def do_sql(mod, fun, args):
    ret = do_emysql(mod, fun, args)
    print ret


def do_emysql(mod, fun, args):
    EMYSQL = "erl -noshell -pa {0}/mmo/ebin -pa {0}/goldrush/ebin -pa {0}/lager/ebin \
            -pa {0}/emysql/ebin -pa {1} -config {2} \
            -run crypto -run lager -run emysql ".format(EBIN_DIR, PY_DIR, CONFIG_FILE)
    cmd = '-eval "begin R=%s:%s(%s),io:format(\\"~w~n\\",[R]),init:stop(R) end"' % (
        mod, fun, args)
    # print EMYSQL+cmd
    cmd = EMYSQL + cmd
    return call_erl(cmd)


def call_erl(cmd):
    if platform.system() == "Windows":
        return os.system(cmd)
    else:
        ret = os.popen(cmd).readlines()
        if ret:
            return ret[-1]


def load_rc():
    print("load_rc")
    # with open(RC_FILE) as f:
    #     for line in f:
    #         k, v = line.split('=', 1)
    #         os.environ[k] = v.strip()


def do_rpc(arg):
    load_rc()
    name, ip = load_name_ip()
    node_name = "%s@%s" % (name, ip)
    cmd = "erl -noshell -pa %s/mmo/ebin -setcookie %s -name ctl_%s -s mmo_ctl -extra %s %s" % (
        EBIN_DIR, load_cookie(), node_name, node_name, arg)
    # print(cmd)
    return os.system(cmd)


def wait_server():
    print "wait server start..."
    if do_rpc("status") == 0:
        return

    # if platform.system() == "Windows":
    #     do_cmd("start.bat")
    # else:
    cmd = "bash " + ROOT_DIR + "/server.sh start mmo_prod"
    do_cmd("sh start.sh")

    wait = 0
    while wait < 30:
        if do_rpc("status") == 0:
            return
        wait += 1
        time.sleep(1)
        print "wait server start...%d" % wait
    print "server cant start"
    exit(1)


def do_cmd(cmd):
    if os.system(cmd) != 0:
        exit(1)


def load_name_ip():
    with open(VM_DIR, 'r') as f:
        for line in f.readlines():
            line = line.strip()
            ret = re.match(r"-name\s(\w+)@([0-9]+(?:\.[0-9]+){0,3})", line)
            if ret:
                return ret.group(1), ret.group(2)


def load_cookie():
    with open(VM_DIR, 'r') as f:
        for line in f.readlines():
            line = line.strip()
            ret = re.match(r"-setcookie\s(\w+)", line)
            if ret:
                return ret.group(1)


def parse_args():
    usage = "usage: %prog game|log [options]"
    parser = optparse.OptionParser(usage=usage)
    parser.add_option("-g", help="general tmp_update_db erl",
                      action="store_true", dest="gen")
    parser.add_option("-s", help="do update sql",
                      action="store_true", dest="sql")
    parser.add_option("-p", help="do update patch",
                      action="store_true", dest="patch")
    return parser


if __name__ == '__main__':
    parser = parse_args()
    options, args = parser.parse_args()
    if len(args) != 1:
        parser.error("incorrect number of arguments")
    elif args[0] == "game":
        do_update_game(options.gen, options.sql, options.patch)
    elif args[0] == "log":
        do_update_log(options.gen, options.sql, options.patch)
