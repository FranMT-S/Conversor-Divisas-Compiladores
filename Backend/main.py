from flask import Flask, jsonify, request, send_file,make_response
from flask_cors import CORS
from src.core.ply import get_tokens,get_tree,calculate_currency
from src.core.graph import drawGraph


app  = Flask(__name__)
CORS(app)

@app.route('/currency', methods=['POST'])
def get_currency():
    
    try:
        line = f'{request.json['cur_input'].lower()} {request.json['value']} {request.json['cur_output'].lower()}'
        tree = get_tree(line)
        tokens = get_tokens(line)

        if(tree == None or tokens == None):
            return {
                "error": "Token Not Founds",
                "isSuccess": False,
                "tokens": [],
                "tree": [],
            }, 400
        
        result = calculate_currency(tree)
        
        res = {
            "result": result,
            "isSuccess": True,
            "tokens": tokens,
            "tree": tree

        }
        

        return res,200
    except Exception as e:
        return {
            "error": f"{e}",
            "isSuccess": False,
            "tokens": [],
            "tree": [],
        },400
        

@app.route('/currency/tree', methods=['POST'])
def get_currency_tree():
    line = '{} {} {}'.format(request.json['cur_input'],str(request.json['value']),request.json['cur_output'])
    tree = get_tree(line)
 
    treeImage = None



    if( tree is None):
        return None
    
    treeImage = drawGraph(tree)
    response = make_response(treeImage)
    response.headers.set('Content-Type', 'image/png')

    return response

@app.route('/', methods =['GET'])
def run():
    return "Server runnings"


if __name__ == '__main__':
    app.run(debug=True)