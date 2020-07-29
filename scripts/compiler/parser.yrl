Terminals integer float period atom l_bracket r_bracket function_prefix.
Nonterminals function.
Rootsymbol function.

function -> atom l_bracket r_bracket function_prefix :
    {function, atom}.