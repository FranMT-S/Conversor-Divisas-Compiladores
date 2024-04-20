from ply.lex import lex
from ply.yacc import yacc

from .currencies import dict_currencies
import re



# All tokens must be named in advance.
tokens = ( 'DOLARES', 'EUROS', 'LEMPIRAS', 'QUETZALES', 'LIBRASESTERLINAS', 'BALBOAS',
           'YEN', 'RUPIAS', 'NUMBER',)


# Ignored characters
t_ignore = ' \t'

#Token for the currency convertion
t_DOLARES = r"dolares"
t_EUROS = r"euros" 
t_LEMPIRAS = r'lempiras'
t_QUETZALES = r'quetzales' 
t_LIBRASESTERLINAS = r'librasesterlinas'
t_BALBOAS = r"balboas"
t_YEN = r"yen"
t_RUPIAS = r"rupias"



# A function can be used if there is an associated action.
# Write the matching regex in the docstring.  
def t_NUMBER(t):
    r'\d+(\.\d+)?'
    t.value = float(t.value)
    return t

# Error handler for illegal characters
def t_error(t):
    print(f'Illegal character in {t.value}. {t.lexer.lexpos}')
    raise Exception(f'Illegal character in {t.value}. {t.lexer.lexpos}')
    # raise Exception(f'Illegal character {t.value[0]!r} {t.lexpos}')
    # t.lexer.skip(1)

# Write functions for each grammar rule which is
# specified in the docstring.
def p_expression(p):
    '''
    expression : currency value currency
    '''
    # p is a sequence that represents rule contents.
    #
    # expression : currency value currency   Lempiras250Dolares
    #   p[0]     :  p[1]  p[2]  p[3]  
    # 
    # outputValue = currency_In([p[1][1],p[3][1]])
    valueCurrencyIn = currency_In(p[1][1],p[3][1])
    p[0] = (p[1],p[2], (p[3]))

    

def p_currency(p):
    '''
    currency : DOLARES
            | EUROS
            | LEMPIRAS
            | QUETZALES
            | LIBRASESTERLINAS
            | BALBOAS
            | YEN
            | RUPIAS
    '''
    p[0] = ('currency',p[1])
    
def p_value(p):
    '''
    value : NUMBER
    '''
    p[0] = ('value', p[1])



def p_error(p):
    print(f'Syntax error at {p.value!r}')
    raise Exception(f'Syntax error at {p.value!r}')



parser = yacc()
lexer = lex()

def currency_In(input_currency,output_currency):
    input_currency = input_currency.upper()
    output_currency = output_currency.upper()
    
    return dict_currencies[input_currency][output_currency]

def calculate_currency(tree):
    input = tree[0][1].upper()
    output = tree[2][1].upper()
    
    return tree[1][1] * dict_currencies[input][output]



def get_tree(input):
    return parser.parse(input)


def get_tokens(input):
    lexer.input(input)
    tokens = []
    while True:
        tok = lexer.token()
        if not tok:
            break      # No more input
        dict ={}
        dict["type"] = tok.type
        dict["value"] = tok.value

        dict["position"] = tok.lexpos 
        tokens.append(dict)
    return tokens
        



