from flask import Flask, jsonify, request
from src.core.ply import execute,get_tokens,get_tree
from src.core.graph import drawGraph

cadena = 'dolares 30 lempiras '
# execute(cadena)
tree =get_tree(cadena)
print(tree)
print(drawGraph(tree))

# print("hola")
# print(Flask)
# print(jsonify)
# # print(request)

# app  = Flask(__name__)

# books = [
#     {"id":1, "tittle":"book 1"},
#     {"id":2, "tittle":"book 2"},
# ]

# @app.route('/books', methods =['GET'])
# def get_books():
#     return books

# @app.route('/', methods =['GET'])
# def get_books():
#     return "Server runnings"


# if __name__ == '__main__':
#     app.run(debug=True)