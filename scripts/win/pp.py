#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import os
import re

path = "../include"
erl_path = "../src/proto"
proto_path = "../proto"

def _path(name):
    return path + os.path.sep + name

def _erl_path(name):
    return erl_path + os.path.sep + name

def _proto_path(name):
    return proto_path + os.path.sep + name

def getProtocol2Cmd():
    protocol = {}
    pattern = re.compile(r"name_to_cmd\((\w+)\)\s*->\s*(\d+);")
    with open(_erl_path("mmo_proto.erl"), "r") as file:
        lines = file.readlines()
        for l in lines:
            match = pattern.match(l)
            if match:
                protocol[match.group(1)] = match.group(2)
    return protocol

def getConstant():
    constant = []
    pattern = re.compile(r"-define\(\s*(\w+)\s*,\s*(\d+)\s*\)\.(\s*%+)?(.*)")
    hrls = ["common_const.hrl", "error.hrl", "proto/proto_const.hrl"]
    for hrl in hrls:
        getConstantFromHrl(hrl, constant, pattern)
        
    errs = []
    getConstantFromHrl("error.hrl", errs, pattern)
    return (constant, errs)

def getConstantFromHrl(hrl, constant, pattern):
    with open(_path(hrl), "r") as file:
        lines = file.readlines()
        for l in lines:
            match = pattern.match(l)
            if match:
                constant.append({"key": match.group(1), "value": match.group(2), "comment": match.group(4)})

def processProtocolJs(protocol):
    lines = []
    index = -1
    pattern = re.compile(r"\s*(\w+)\.encode\s=") # 查找encode函数
    pattern1 = re.compile(r"\s*/\*\*") # 注释行
    pattern2 = re.compile(r"\s*\*/?") # 注释行
    com = False

    with open(_proto_path("protocol.js"), "r") as file:
        lines = file.readlines()
        lines[1] = r"var P = (function($protobuf) {"
        clone = lines[:]
        for l in clone:
            index = index + 1

            match = pattern.match(l)
            if match and protocol.has_key(match.group(1)):
                key = match.group(1)
                lines.insert(index, ("        %s.cmd = %s;\n") % (key, protocol[key]))
                index = index + 1
                com = False
                ret = False
            elif pattern1.match(l):
                del lines[index]
                index = index - 1
                com = True
            elif com and pattern2.match(l):
                del lines[index]
                index = index - 1
            else:
                if not l.strip():
                    del lines[index]
                    index = index - 1
                
                com = False

    with open(_proto_path("protocol.js"), "w") as file:
        file.write(("").join(lines))

def processProtocolDTs(protocol):
    lines = []
    index = -1
    pattern = re.compile(r"^\s*class\s(\w+)\s\{$"); # 类定义
    pattern2 = re.compile(r"^(\s*public\s\w+)_:"); # 以下划线结束的变量
    pattern3 = re.compile(r"^\s*class\s(s2c|c2s)_(\w+) implements I(\w+)\s\{$");
    with open(_proto_path("protocol.d.ts"), "r") as file:
        lines = file.readlines()
        lines[0] = '//import * as $protobuf from "protobufjs";\n'
        lines[1] = '\n'
        lines[2] = '/*export = P;*/type Long = number/*dcodeIO.Long*/;\n'
        clone = lines[:]
        for l in clone:
            index = index + 1

            match = pattern.match(l)
            if match:
                classname = match.group(1)
                lines[index] = "    class %s implements I%s {\n" % (classname, classname)
                if classname.startswith("s2c") or classname.startswith("c2s"):
                    lines.insert(index + 1, ("        public static cmd: number;\n"))
                    index = index + 1
            elif pattern3.match(l):
                lines.insert(index + 1, ("        public static cmd: number;\n"))
                index = index + 1
            else:
                lines[index] = re.sub(pattern2, "\\1:", lines[index])


    with open(_proto_path("protocol.d.ts"), "w") as file:
            content = ("").join(lines);
            new = content.replace("$protobuf", "protobuf")
            file.write(new)

def processProtocolEnumDTs(constant):
    lines = [];
    lines.append("\ndeclare const enum PE {\n");
    for e in constant:
        comment = e["comment"]
        comment = "//" + comment if comment else ""
        lines.append(("    %s = %s, %s\n") % (e["key"], e["value"], comment))

    lines.append("}\n");
    with open(_proto_path("protocol.d.ts"), "a") as file:
        file.write(("").join(lines))
        
def processProtocolErrorJs(errs):
    lines = [];
    lines.append("\nvar ErrorCodeConst\n");
    lines.append("(ErrorCodeConst||(ErrorCodeConst={})).DEFAULT = {\n");
    for e in errs:
        comment = e["comment"]
        key = e["key"]
        if (comment and key.startswith('ERR_')):
            lines.append(("    \"%s\": \"%s\",\n") % (e["value"], comment.strip().decode('string_escape')))

    lines.append("}\n");
    with open(_proto_path("protocol.js"), "a") as file:
        file.write(("").join(lines))        

if __name__ == "__main__":
    protocol = getProtocol2Cmd()
    (constant, errs) = getConstant()
    processProtocolJs(protocol)
    processProtocolDTs(protocol)
    processProtocolEnumDTs(constant)
    processProtocolErrorJs(errs)
