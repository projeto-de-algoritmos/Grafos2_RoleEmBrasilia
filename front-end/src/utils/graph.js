import names from '../names.json'
import dists from '../dists.json'

class Node {
    adjList = [];
    constructor(id, name) {
        this.name = name;
        this.id = id; 
    }
}
class Graph {
    nodes = [];

    addNode(node) {
        this.nodes.push(node);
    }
}

const dijkstra = (graph, fromId, toId) => {
    
}

let graph = new Graph();
for (let k = 0; k < 33; ++k) {
    let eid = names.RA_Id[`${k}`]
    let enode = new Node(names.RA_Id[`${k}`], names.Nome[`${k}`])
    dists[eid].forEach(element => {
       enode.adjList.push(element) 
    });

    graph.addNode(enode)
}

console.log(graph)

export { dijkstra, graph };
