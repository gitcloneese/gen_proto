%%%-----------------------------------------------------------------------------
%%% @author Shengning Piao
%%% @doc 
%%%
%%% @end
%%% Created : date()
%%%-----------------------------------------------------------------------------
%%%-------------------------------------------------------------------
%%% @author psn
%%% @copyright (C) 2019, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 06. Dec 2019 10:03 AM
%%%-------------------------------------------------------------------
-module(lexer_compiler).
-author("psn").
-export([c/0]).

c() ->
    Ret = leex:file("lexer.xrl"),
    io:format("Compile Leex: ~p~n", [Ret]),

    ComRet = compile:file(lexer),
    io:format("Compile lexer.erl: ~p~n", [ComRet]),

    code:purge(lexer),
    {module, lexer} = code:load_file(lexer),
    io:format("Reload lexer success!~n", []),

    {ok, Lines} = file:read_file("lexer_test.erl"),
    io:format("Read lexer_test.erl success!~n", []),

    case lexer:string(binary_to_list(Lines)) of
        {ok, Tokens, Num} ->
            io:format("Num=~w; Tokens:~n~p~n", [Num, Tokens]),

            YeccRet = yecc:file(parser),
            io:format("Compile Yecc: ~p~n", [YeccRet]),
            YeccComRet = compile:file(parser),
            io:format("Compile parser: ~p~n", [YeccComRet]),
            code:purge(parser),
            code:load_file(parser),
            io:format("Reload parser success!~n", []),
            parser:parse(Tokens);

        TokenRet ->
            io:format("~p~n", [TokenRet])
    end.

