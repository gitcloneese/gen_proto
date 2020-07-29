Definitions.

VARIABLE = [A-Z_][0-9a-zA-Z_]*
ATOM = [a-z][0-9a-zA-Z_]*|\'[0-9a-zA-Z_@#$%&*]+\'
NUMBER = [0-9]+
FLOAT = (\+|-)?[0-9]+\.[0-9]+((E|e)(\+|-)?[0-9]+)?
NL = (\n|\r)
BLANK = ({NL}|\t|\s)
L_BRACKET = \(
R_BRACKET = \)
FUNCTION_PREFIX = ->
PERIOD = \.

Rules.

{NUMBER} :
    {token,{integer,TokenLine,list_to_integer(TokenChars)}}.

{FLOAT} :
    {token,{float,TokenLine,list_to_float(TokenChars)}}.

{ATOM} :
    {token,{atom,TokenLine,list_to_atom(TokenChars)}}.

{L_BRACKET} :
    {token,{l_bracket,TokenLine}}.

{R_BRACKET} :
    {token,{r_bracket,TokenLine}}.

{FUNCTION_PREFIX} :
    {token,{function_prefix,TokenLine}}.

{PERIOD} :
    {token,{period,TokenLine}}.

{BLANK}+ : skip_token.

Erlang code.