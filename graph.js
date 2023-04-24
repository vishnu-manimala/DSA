class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    dispaly(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> "+ [...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
       return (
       this.adjacencyList[vertex1].has(vertex2) && 
       this.adjacencyList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

console.log(graph)
graph.addEdge("1","2")
graph.addEdge("3","1")

graph.dispaly();
graph.removeVertex("2")
console.log(" ")
graph.dispaly();