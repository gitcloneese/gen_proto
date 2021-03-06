%%%-------------------------------------------------------------------
%%% @author 86132
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 29. 7月 2020 19:18
%%%-------------------------------------------------------------------
-module(gen_proto).
-author("86132").

%% API
-export([]).
%% #!/usr/bin/env escript
%% -*- erlang -*-
-mode(compile).
-export([main/1]).

main(Argv) ->
  RootDir = "../../",
  ProtoDir = RootDir ++ "src/proto/",
  ProtoFile = ProtoDir ++ "mmo_pb.proto",
  ErlFile = RootDir ++ "src/auto_generated/mmo_proto.erl",
  HrlFile = RootDir ++ "src/include/proto/mmo_proto.hrl",
  ConsHrlFile = RootDir ++ "src/include/proto/proto_const.hrl",
  code:add_pathz(RootDir ++ "_build/default/lib/gpb/ebin"),
  {ModuleList, CmdList} = parse_cmd_and_name(ProtoFile),
  gen_proto(ModuleList, CmdList, ErlFile),
  gen_proto_hrl(ModuleList, HrlFile),
  gen_proto_conshrl(ModuleList, ConsHrlFile),
  io:format("gen mm_proto.erl success!~n", []),
  PBFiles = filelib:wildcard("pb_*.proto", ProtoDir) -- "mmo_pb.proto",
  %PBFiles = [ProtoDir ++ N || N <- PBFiles0],

  case gpb_compile:parse_opts_and_args(Argv) of
    {ok, {Opts, _Files}} ->
      %%gpb_compile:c(Opts, PBFiles); %% will halt
      do_worker(PBFiles, Opts, 4);
    {error, Reason} ->
      io:format("Error: ~s.~n", [Reason]),
      usage(),
      halt(1)
  end.

usage() ->
  io:format("usage: ~s ProtoFile ~n",
    [filename:basename(escript:script_name())]).

print(Format, Args) ->
  io:format(Format ++ "~n", Args).

parse_cmd_and_name(ProtoFile) ->
  DirName = filename:dirname(ProtoFile),
  ModuleList = find_module_list(ProtoFile),
  CmdList = find_message_list(ModuleList, DirName, []),
  {ModuleList, CmdList}.

find_module_list(ProtoFile) ->
  case file:open(ProtoFile, [read, {encoding, utf8}]) of
    {ok, IoDevice} ->
      ModuleList = find_module_list(IoDevice, 0, []),
      file:close(IoDevice),
      ModuleList;
    {error, _Reaon} = Error ->
      print("open ~p fail! ~p", [ProtoFile, Error]),
      []
  end.

find_module_list(IoDevice, Index, List) ->
  case file:read_line(IoDevice) of
    {ok, Data} ->
      case Data of
        [$i, $m, $p, $o, $r, $t | T] ->
          case string:str(T, "pb_") of
            0 ->
              find_module_list(IoDevice, Index, List);
            _ ->
              ModuleName = string:strip(
                string:strip(string:strip(string:strip(string:strip(T), both,
                  $\n), both, $\r), both, $;), both, $\"),
              find_module_list(IoDevice, Index + 1, [{Index, ModuleName} | List])
          end;
        _ ->
          find_module_list(IoDevice, Index, List)
      end;
    eof ->
      List;
    {error, _Reaon} = Error ->
      print("read proto file error!~p", [Error]),
      List
  end.

find_message_list([], _DirName, CmdList) ->
  lists:append(CmdList);
find_message_list([{ModuleIndex, ModuleName} | ModuleList], DirName, CmdList) ->
  Path = filename:join([DirName, ModuleName]),
  MessageList = case file:read_file(Path) of
                  {ok, Data} ->
                    case re:run(Data, message_patern(), [global, {capture, [1], binary}]) of
                      {match, MatchedList} when MatchedList =/= [] ->
                        MatchedList;
                      _ ->
                        []
                    end;
                  _ ->
                    []
                end,
  {_, CmdList1} = lists:foldl(
    fun(MessageName, {MessageIndex, Acc}) ->
      <<Cmd:16>> = <<ModuleIndex:8, MessageIndex:8>>,
      {MessageIndex + 1, [{Cmd, MessageName} | Acc]}
    end, {1, []}, MessageList),
  CmdList2 = lists:reverse(CmdList1),
  find_message_list(ModuleList, DirName, [CmdList2 | CmdList]).

message_patern() ->
  {ok, Pattern} = re:compile("^\s*message\s+((c2s|s2c)_\\w+)", [multiline]),
  Pattern.

gen_dispatch_cmd([], List) ->
  "dispatch_cmd(Seq, Cmd, Data, Role) ->
      <<Module:8, _Rest:8>> = <<Cmd:16>>,
      case Module of \n" ++
    List ++
    "        _ -> {error, bad_cmd}
        end.";
gen_dispatch_cmd([{ModuleIndex, ModuleName} | ModuleList], List) ->
  [$p, $b, $_| T] = filename:basename(ModuleName, ".proto"),
  Str = io_lib:format("        ~p -> pp_~s:handle_cmd({Seq, Data}, Role);~n", [ModuleIndex, T]),
  gen_dispatch_cmd(ModuleList, [Str | List]).

gen_robot_dispatch_cmd([], List) ->
  "dispatch_robot_cmd(Seq, Cmd, Data, Robot) ->
      <<Module:8, _Rest:8>> = <<Cmd:16>>,
      case Module of \n" ++
    List ++
    "        _ -> {error, bad_cmd}
        end.";
gen_robot_dispatch_cmd([{ModuleIndex, ModuleName} | ModuleList], List) ->
  [$p, $b, $_| T] = filename:basename(ModuleName, ".proto"),
  Str = io_lib:format("        ~p -> pp_robot_~s:handle_cmd({Seq, Data}, Robot);~n", [ModuleIndex, T]),
  gen_robot_dispatch_cmd(ModuleList, [Str | List]).

gen_encode([], List) ->
  "encode(Seq, Msg) when is_tuple(Msg) ->
  Name = element(1, Msg),
  Cmd  = name_to_cmd(Name),
  <<ModuleIndex:8, _Rest:8>> = <<Cmd:16>>,
  PB = case ModuleIndex of \n" ++
    List ++
    "       _  -> throw({error, bad_proto_msg})
    end,
    Len= byte_size(PB),
    Data = <<Len:32, Seq:16, Cmd:16, PB/binary>>,
    {ok, Data}.\n\n";
gen_encode([{ModuleIndex, ModuleName} | ModuleList], List) ->
  BaseName = filename:basename(ModuleName, ".proto"),
  Str = io_lib:format("        ~p -> ~s:encode_msg(Msg);~n", [ModuleIndex, BaseName]),
  gen_encode(ModuleList, [Str | List]).

gen_decode([], List) ->
  "decode(<<Len:32, Seq:16, Cmd:16, PB:Len/binary-unit:8, Rest/binary>>) ->
  <<ModuleIndex:8, _Msg:8>> = <<Cmd:16>>,
  Data = case ModuleIndex of \n" ++
    List ++
    "       _ -> throw({error, bad_proto_bin})
    end,
    {ok, Seq, Cmd, Data, Rest};
decode(Bin) ->
    {ok, Bin}.\n\n";
gen_decode([{ModuleIndex, ModuleName} | ModuleList], List) ->
  BaseName = filename:basename(ModuleName, ".proto"),
  Str = io_lib:format("        ~p -> ~s:decode_msg(PB, cmd_to_name(Cmd));~n", [ModuleIndex, BaseName]),
  gen_decode(ModuleList, [Str | List]).

gen_proto(ModuleList, CmdList, ErlFile) ->
  {CmdToNameList, NameToCmdList} = gen_proto1(CmdList, {[], []}),
  {ok, IoDevice} = file:open(ErlFile, [write, {encoding, utf8}]),
  Head = "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%% !!! DO NOT EDIT !!!
%%% GENERATED FROM PROTOCOL DEFINE FILES
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
-module(mmo_proto). \n\n",

  Export = "-export([encode/2,
     decode/1,
     dispatch_cmd/4,
     dispatch_robot_cmd/4,
     cmd_to_name/1,
     name_to_cmd/1]).\n\n\n",

  Encode = gen_encode(ModuleList, []),
  Decode = gen_decode(ModuleList, []),
  DispatchCmd = gen_dispatch_cmd(ModuleList, []),

  RobotDispatchCmd = gen_robot_dispatch_cmd(ModuleList, []),

  file:write(IoDevice, Head),
  file:write(IoDevice, Export),
  file:write(IoDevice, Encode),
  file:write(IoDevice, Decode),
  file:write(IoDevice, "\n\n\n"),
  file:write(IoDevice, DispatchCmd),
  file:write(IoDevice, "\n\n\n"),
  file:write(IoDevice, RobotDispatchCmd),
  file:write(IoDevice, "\n\n\n"),
  file:write(IoDevice, CmdToNameList),
  file:write(IoDevice, "\n\n\n"),
  file:write(IoDevice, NameToCmdList),
  file:write(IoDevice, "\n\n\n"),
  file:close(IoDevice).

gen_proto1([{Cmd, Name} | T], {CmdToNameList, NameToCmdList}) ->
  CmdToName = io_lib:format("cmd_to_name(~p) -> ~s;~n", [Cmd, Name]),
  NameToCmd = io_lib:format("name_to_cmd(~s) -> ~p;~n", [Name, Cmd]),
  gen_proto1(T, {[CmdToName | CmdToNameList], [NameToCmd | NameToCmdList]});
gen_proto1([], {CmdToNameList, NameToCmdList}) ->
  CmdToNameList1 = lists:reverse(["cmd_to_name(_) -> {error, bad_cmd}." | CmdToNameList]),
  NameToCmdList1 = lists:reverse(["name_to_cmd(_) -> {error, bad_name}."| NameToCmdList]),
  {CmdToNameList1, NameToCmdList1}.

gen_proto_hrl(ModuleList, HrlFile) ->
  List= gen_proto_hrl1(ModuleList, []),
  Code= "-ifndef(MMO_PROTO_HRL__).
-define(MMO_PROTO_HRL__, true).\n\n" ++ List ++
    "\n-endif.",
  {ok, IoDevice} = file:open(HrlFile, [write, {encoding, utf8}]),
  file:write(IoDevice, Code),
  file:close(IoDevice).

gen_proto_hrl1([], List) -> List;
gen_proto_hrl1([{_ModuleIndex, ModuleName} | ModuleList], List) ->
  BaseName = filename:basename(ModuleName, ".proto"),
  Str = io_lib:format("-include(\"~s.hrl\").~n", [BaseName]),
  gen_proto_hrl1(ModuleList, [Str | List]).

gen_proto_conshrl(ModuleList, ConsHrlFile) ->
  {ok, Pattern} = re:compile("^\s*([A-Z]\\w+)\s*=\s*(\\d+);?(.*)$", [multiline]),
  List= gen_proto_conshrl1(ModuleList, [], Pattern),
  Code= ["-ifndef(PROTO_CONST_HRL__).
-define(PROTO_CONST_HRL__, true).\n\n", List,
    "\n-endif."],
  file:write_file(ConsHrlFile, Code).

gen_proto_conshrl1([], List, _Pattern) -> List;
gen_proto_conshrl1([{_ModuleIndex, ModuleName} | ModuleList], List, Pattern) ->
  Path = filename:join(["../../apps/mmo/proto", ModuleName]),
  List2 = case file:read_file(Path) of
            {ok, Data} ->
              case re:run(Data, Pattern, [global, {capture, [1,2,3], binary}]) of
                {match, MatchedList} when MatchedList =/= [] ->
                  lists:map(
                    fun([DefName, DefVal, DefComment]) ->
                      DefComment2 = binary:replace(DefComment, <<"//">>, <<"%%">>),
                      ["-define(", DefName, ", ", DefVal, ").", DefComment2, "\n"]
                    end, MatchedList);
                _ ->
                  []
              end;
            _ ->
              io:format("read file error! path=~p", [Path]),
              []
          end,
  NewList = List2 ++ List,
  gen_proto_conshrl1(ModuleList, NewList, Pattern).

%% worker进行编译
do_worker(L, Opts, Worker) ->
  Opts2 = Opts ++ [report_warnings, report_errors],
  WorkerList = do_split_list(L, Worker),
  % 启动进程
  Ref = make_ref(),
  Self = self(),
  Pids = [start_worker(E, Opts2, Self, Ref) || E <- WorkerList],
  do_wait_worker(length(Pids), Ref).

%% 等待结果
do_wait_worker(0, _Ref) ->
  halt(0);
do_wait_worker(N, Ref) ->
  receive
    {ack, Ref} ->
      do_wait_worker(N - 1, Ref);
    {error, Ref} ->
      halt(1);
    {'EXIT', _P, _Reason} ->
      do_wait_worker(N, Ref);
    _Other ->
      io:format("receive unknown msg:~p~n", [_Other]),
      do_wait_worker(N, Ref)
  end.

%% 将L分割成最多包含N个子列表的列表
do_split_list(L, N) ->
  Len = length(L),
  % 每个列表的元素数
  LLen = (Len + N - 1) div N,
  do_split_list(L, LLen, []).

do_split_list([], _N, Acc) ->
  lists:reverse(Acc);
do_split_list(L, N, Acc) ->
  {L2, L3} = lists:split(erlang:min(length(L), N), L),
  do_split_list(L3, N, [L2 | Acc]).

%% 启动worker进程
start_worker(L, Opts, Parent, Ref) ->
  spawn_link(
    fun() ->
      [case gpb_compile:file(FileName, Opts) of
         ok ->
           io:format("gpb_compile ~s success!~n", [FileName]);
         Err ->
           io:format("gpb_compile error!File:~s, Error:~p~n", [FileName, Err]),
           Parent ! {error, Ref}
       end || FileName <- L],
      Parent ! {ack, Ref}
    end).
