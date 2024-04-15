
import pydot
import io

def drawGraph(tree):
    graph = pydot.Dot(graph_type='graph')

    root = None

    def createNode(token,index):
       
        if(len(token) == 2):  
          
            child = pydot.Node("child_{}".format(index),label=token[0])
            valueNode = pydot.Node(str(token[1]), shape="circle") 
            graph.add_edge(pydot.Edge( child,valueNode))
          
        return child
       
    childs = []
    if(len(tree) != 3):  
        return None
    
    i = 0
    root = pydot.Node("expresion", shape="circle")  
    for token in tree:
        
        childs.append(createNode(token,i))
        i = i + 1          

    
    graph.add_node(root)
    for child in childs:
        graph.add_node(child)
        graph.add_edge(pydot.Edge(root, child )) 
        
    
    
    graph.write_png("tree.png")
    png_bytes = graph.create(format='png')

    
    image_stream = io.BytesIO(png_bytes)
    return image_stream

   
      




