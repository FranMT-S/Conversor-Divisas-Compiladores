from ply.lex import lex
from ply.yacc import yacc
import re

"""from src import *
import re"""

"""if __name__ == "__main__":


 analizer = SyntaxAnalizer();
    analizer.token_ignore_newline(3)"""






# --- Tokenizer

# All tokens must be named in advance.
tokens = ( 'DOLARES', 'EUROS', 'LEMPIRAS', 'QUETZAL', 'LIBRASESTERLINA', 'BALBOAS',
           'YEN', 'RUPIAS', 'NUMBER')

dict_divisas = {
    "DOLARES": {
        "DOLARES" : 1,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "EUROS": {
        "DOLARES" : 0,
        "EUROS" : 1,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "LEMPIRAS": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 1,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "QUETZAL": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 1,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "LIBRASESTERLINA": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 1,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "BALBOAS": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 1,
        "YEN" : 0,
        "RUPIAS" : 0
    },
    "YEN": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 1,
        "RUPIAS" : 0
    },
    "RUPIAS": {
        "DOLARES" : 0,
        "EUROS" : 0,
        "LEMPIRAS" : 0,
        "QUETZAL" : 0,
        "LIBRASESTERLINA" : 0,
        "BALBOAS" : 0,
        "YEN" : 0,
        "RUPIAS" : 1
    }
}


# Ignored characters
t_ignore = ' \t'

# Token matching rules are written as regexs
# t_PLUS = r'\+'
# t_MINUS = r'-'
# t_TIMES = r'\*'
# t_DIVIDE = r'/'
# t_LPAREN = r'\('
# t_RPAREN = r'\)'
# t_NAME = r'[a-zA-Z_][a-zA-Z0-9_]*'

#Token para la conversion de divisas
t_DOLARES = r"dolares"
t_EUROS = r"euros" 
t_LEMPIRAS = r'lempiras'
t_QUETZAL = r"quetzales" 
t_LIBRASESTERLINA = r"librasesterlinas"
t_BALBOAS = r"balboas"
t_YEN = r"yen"
t_RUPIAS = r"rupias"

# A function can be used if there is an associated action.
# Write the matching regex in the docstring.  
def t_NUMBER(t):
    r'\d+'
    t.value = float(t.value)
    return t


# Ignored token with an action associated with it
# def t_ignore_newline(t):
#     r'\n+'
#     t.lexer.lineno += t.value.count('\n')


# Error handler for illegal characters
def t_error(t):
    print(f'Illegal character {t.value[0]!r}')
    t.lexer.skip(1)

# Build the lexer object
lexer = lex()
    
# --- Parser

# Write functions for each grammar rule which is
# specified in the docstring.
def p_expression(p):
    '''
    expression : divisa term divisa
    '''
    # p is a sequence that represents rule contents.
    #
    # expression : divisa term divisa   Lempiras250Dolares
    #   p[0]     :  p[1]  p[2]  p[3]  
    # 
    p[0] = ('Entrada', p[1], 'cantidad', p[2],'Salida', p[3])

def p_expression_term(p):
    '''
    expression : term
    '''
    p[0] = p[1]

def p_expression_divisa(p):
    '''
    expression : divisa
    '''
    p[0] = p[1]
    

def p_divisa(p):
    '''
    divisa : DOLARES
            | EUROS
            | LEMPIRAS
            | QUETZAL
            | LIBRASESTERLINA
            | BALBOAS
            | YEN
            | RUPIAS
    '''
    p[0] = p[1]
    
def p_term(p):
    '''
    term : NUMBER
    '''
    p[0] = p[1]
    



# def p_term(p):
#     '''
#     term : factor TIMES factor
#          | factor DIVIDE factor
#     '''
#     p[0] = ('binop', p[2], p[1], p[3])

# def p_term_factor(p):
#     '''
#     term : factor
#     '''
#     p[0] = p[1]

# def p_factor_number(p):
#     '''
#     factor : NUMBER
#     '''
#     p[0] = ('number', p[1])

# def p_factor_name(p):
#     '''
#     factor : NAME
#     '''
#     p[0] = ('name', p[1])

# def p_factor_unary(p):
#     '''
#     factor : PLUS factor
#            | MINUS factor
#     '''
#     p[0] = ('unary', p[1], p[2])

# def p_factor_grouped(p):
#     '''
#     factor : LPAREN expression RPAREN
#     '''
#     p[0] = ('grouped', p[2])

def p_error(p):
    print(f'Syntax error at {p.value!r}')

# Build the parser
parser = yacc()

cadena = 'euros 30 lempiras'
# Parse an expression
ast = parser.parse(cadena)
print(ast)
           
           

           


lexer.input(cadena)

Tokens = []

while True:
    tok = lexer.token()
    if not tok:
        break      # No more input
    dict ={}
    dict["type"] = tok.type
    dict["value"] = tok.value
    dict["line"] = tok.lineno
    dict["position"] = tok.lexpos 
    Tokens.append(dict)
    
print(Tokens)

