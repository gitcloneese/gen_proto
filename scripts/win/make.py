#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os,sys
import re
import commands
from glob import glob

def parse_emakefile(filename):
    tasklist = []
    with open(filename, 'r') as f:
        str = f.read()
        str1 = re.sub('(%.*\n|\s+)', '', str)
        str1 = str1.replace('{', '(')
        str1 = str1.replace('}', ')')
        str1 = str1.replace(').', '),')
        str2 = re.sub(r'\b(\w+)\b', r"'\1'", str1)
        str2 = eval(str2)
        for i in str2:
            pathlist, optlist = i
            filelist = []
            for j in pathlist:
                j,isstr = del_semi(j)
                filelist.extend(glob(j+'.erl'))
            filelist = [i for i in filelist if os.path.isfile(i)]

            opts = []
            outdir = 'ebin/game'
            for j in optlist:
                j,isstr = del_semi(j)
                if isstr:
                    opts.append('+' + j)
                elif isinstance(j, tuple):
                    k,v = j
                    v = del_semi(v)[0]
                    if k == 'i':
                        opts.append('-I' + v)
                    elif k == 'outdir':
                        outdir = v
            opts = ' '.join(opts)
            tasklist.extend([(f, opts, outdir) for f in filelist])
    return tasklist

def unpack_args(func):
    from functools import wraps
    @wraps(func)
    def wrapper(args):
        if isinstance(args, dict):
            return func(**args)
        else:
            return func(*args)
    return wrapper

@unpack_args
def do_make(srcfile, opts, outdir):
    srcfilename, srcfileext = os.path.splitext(srcfile)
    desfile = os.path.join(outdir, os.path.basename(srcfilename) + '.beam')
    destime = 0
    if os.path.isfile(desfile):
        destime = os.path.getmtime(desfile)
    if destime == 0 or os.path.getmtime(srcfile) > destime:
        cmd = 'erlc %s -pa deps/make -o %s %s' % (opts, outdir, srcfile)
        print cmd
        if os.system(cmd):
            os._exit(1)

def del_semi(s):
    return (s.replace('\'', ''), True) if isinstance(s, str) else (s, False) 

def main():
    from multiprocessing.dummy import Pool
    os.chdir(os.path.join(os.path.dirname(__file__), os.pardir))
    pool = Pool()
    tasklist = parse_emakefile('Emakefile')
    pool.map_async(do_make, tasklist).get(0xfff)
    pool.close()
    pool.join()
    print '±‡“Î≥…π¶£°'

if __name__ == '__main__':
    main()
