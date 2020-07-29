%%%-------------------------------------------------------------------
%% @doc gen_proto public API
%% @end
%%%-------------------------------------------------------------------

-module(gen_proto_app).

-behaviour(application).

-export([start/2, stop/1]).

start(_StartType, _StartArgs) ->
    gen_proto_sup:start_link().

stop(_State) ->
    ok.

%% internal functions
