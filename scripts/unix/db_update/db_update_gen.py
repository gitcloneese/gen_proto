#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os,sys,re

def parse_sql_file(filename, version):
    sql = {}
    patch = {}
    sqlver = None
    pthver = None
    with open(filename, 'r') as f:
        for line in f.readlines():
            line = line.strip()
            if line == "" or line == "--": continue

            ret = re.match(r"--\ssql:\s?([0-9]{10})", line) 
            if ret:
                pthver = None
                sqlver = int(ret.group(1))
                if sqlver > version:
                    if sqlver in sql:
                        raise Exception("dump sqlver %d" % sqlver)
                    sql[sqlver] = []
                continue

            ret = re.match(r"--\spatch:\s?([0-9]{10})", line)
            if ret:
                sqlver = None
                pthver = int(ret.group(1))
                if pthver > version:
                    if pthver in patch:
                        raise Exception("dump pthver %d" % pthver)
                    patch[pthver] = []
                continue

            if pthver and pthver in patch:
                ret = re.match(r"--\s(\w+:\w+\(\w?\))", line)
                if ret:
                    func = ret.group(1)
                    patch[pthver].append(func)
            elif re.match(r"/\*|\*|\*/|--", line):
                pass
            elif sqlver and sqlver in sql:
                sql[sqlver].append(line)

    f = lambda d: [(k, d[k]) for k in sorted(d.keys())]
    return f(sql), f(patch)

def gen_erl_fun(fun, content):
    content.append("0.\n")
    return "\n" + fun + " ->\n    " + ",\n    ".join(content)

def gen_execute_sql():
    return """
execute_sql(_Pool, []) -> ok;
execute_sql(Pool, [Sql|Tail]) ->
    Sql2 = unicode:characters_to_binary(Sql),
    Result = (catch emysql:execute(Pool, Sql2, 600000)),
    case element(1, Result) == ok_packet of
        true ->
            execute_sql(Pool, Tail);
        false ->
            ?ERROR("sql result ~p", [Result]),
            init:stop(1),
            false
    end.
"""
def gen_erl_head(erlname):
    return """
-module(%s).
-compile(export_all).

-define(IF(C, T, F), (case (C) of true -> (T); false -> (F) end)).
-define(INFO(Format, Args),
    lager:log(info, [{pid, self()}, {module, ?MODULE}, {line, ?LINE}], Format, Args)).
-define(ERROR(Format, Args),
    lager:log(error, [{pid, self()}, {module, ?MODULE}, {line, ?LINE}], Format, Args)).    
""" % erlname

def gen_do_sql(items):
    content = []
    for v, c in items:
        s = ""
        s1 = []
        for j in c:
            s += j
            if j[-1] == ';':
                s1.append(s)
                s = ""
        if s:
            s1.append(s)
        s2 = ",\n".join(['"' + s + '"' for s in s1 if s != ""])
        content.extend(["\nsql_%s() ->\n[" % v, s2, "]."])

    return "\n".join(content)

def do_save_update_erl(erlfile, sqls, patchs):
    erlname = os.path.splitext(os.path.basename(erlfile))[0]
    head = gen_erl_head(erlname)
    with open(erlfile, 'w') as f:
        f.write(head)

        content = []
        if sqls:
            lastver = sqls[-1][0]
            f.write("\n%%version: %s - %s" % (sqls[0][0], lastver))

            for v, s in sqls:
                log = '?INFO("excute sql %s", [])' % v
                con = 'ok = execute_sql(Pool, sql_%s())' % v
                content.extend([log, con])
            content.append('version_patch:set_db_version(Pool, %s)' % lastver)
        else:
            f.write("\n%%version: none")
            content = ['?INFO("sql nothing update!", [])']

        content.append('?INFO("do_sql all done!", [])')
        f.write(gen_erl_fun("do_sql(Pool)", content))

        content = []
        if patchs:
            lastver = patchs[-1][0]
            f.write("\n%%%%version: %s - %s" % (patchs[0][0], lastver))

            for v, func in patchs:
                log = '?INFO("excute patch %s", [])' % v
                con = ",\n    ".join(func)
                content.extend([log, con])
            content.append('version_patch:set_db_version(default, %s)' % lastver)
            content.append('?IF(lib_common:is_inter_server(), ok, memcache:flush())')
        else:
            f.write("\n%%%%version: none")
            content = ['?INFO("patch nothing update!", [])']

        content.append('?INFO("do_patch all done!", [])')
        f.write(gen_erl_fun("do_patch()", content))

        f.write(gen_execute_sql())
        f.write(gen_do_sql(sqls))

def get_max_version(sqlfile):
    sqls, patchs = parse_sql_file(sqlfile, 0)
    if sqls and patchs:
        return max(sqls[-1][0], patchs[-1][0])
    elif sqls:
        return sqls[-1][0]
    elif patchs:
        return patchs[-1][0]
    else:
        return 0

def main(sqlfile, erlfile, dbversion):
    if len(str(dbversion)) != 10: return usage()
    sqls, patchs = parse_sql_file(sqlfile, dbversion)
    do_save_update_erl(erlfile, sqls, patchs)

    f = lambda l: [x[0] for x in l]
    ret = (f(sqls), f(patchs))
    print "sql versions: %s\npatch versions: %s" % ret
    return ret 

def usage():
    print """{0} sqlfile erlfile dbversion
{0} xx.sql xx.erl 2017081500""".format(sys.argv[0])
    exit(1)

if __name__ == '__main__':
    [sqlfile, erlfile, dbversion] = sys.argv[1:]
    main(sqlfile, erlfile, dbversion)

