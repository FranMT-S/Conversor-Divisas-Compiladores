from ply.lex import lex
from ply.yacc import yacc
from src.core.divisas import dict_divisas

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



# Ignored characters
t_ignore = ' \t'

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
    
for v in Tokens:
    print(v)

def calculate_currency(input,output,value):
    input = input.upper()
    output = output.upper()
    
    return value * dict_divisas[input][output]


print(calculate_currency("EUROS","LEMPIRAS",1))


import pydot

# Crear el gráfico
graph = pydot.Dot(graph_type='graph')

# Crear los nodos
node_2 = pydot.Node("2", shape="circle")
node_multiply = pydot.Node("*", shape="circle")
node_4 = pydot.Node("4", shape="circle")
node_plus = pydot.Node("+", shape="circle")

# Conectar los nodos
graph.add_edge(pydot.Edge(node_2, node_multiply))
graph.add_edge(pydot.Edge(node_2, node_4))
graph.add_edge(pydot.Edge(node_2, node_plus))

# Agregar el gráfico
graph.add_node(node_2)
graph.add_node(node_multiply)
graph.add_node(node_4)
graph.add_node(node_plus)

# Guardar el gráfico como imagen PNG
graph.write_png("arbol_sintactico.png")


