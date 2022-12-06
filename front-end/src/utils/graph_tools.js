export class Node {
    constructor(id, name) {
        this.name = name;
        this.id = id; 
        this.adjList = [];
    }
}

export class Graph {
    constructor() {
        this.nodes = {}
        this.n = 0;
    }

    addNode(node) {
        this.nodes[node.id] = node;
        this.n++;
    }

    dijkstra(source, finish) {
        // console.log('Source:', source)
        let distances = {},
            parents = {},
            visited = new Set();
        console.log(this.nodes)
        Object.keys(this.nodes).forEach((i)=> {
            // console.log('Nodes i:', i)

            if (`${this.nodes[i].id}` === source) {
                // console.log('Equals source')
                distances[source] = 0;
            } else {
                distances[this.nodes[i].id] = Infinity;
            }
            parents[this.nodes[i].id] = null;
        })
        
        let currVertex= this.vertexWithMinDistance(distances, visited);

        while (currVertex !== null) {

            // console.log('currVert = ', currVertex );
            let distance = distances[currVertex],
                neighbors = this.nodes[currVertex];
                // console.log('neighbors :', neighbors)

            for (let neighbor of neighbors.adjList) {
                // console.log('Neighbor: ', neighbor)
                let [neighborId, neighborDist] = neighbor
                // console.log('Id and dists: ', neighborId, neighborDist)
                let newDistance = distance + neighborDist;
                if (distances[neighborId] > newDistance) {
                    distances[neighborId] = newDistance;
                    parents[neighborId] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.vertexWithMinDistance(distances, visited);
        }

        console.log(parents);
        console.log(distances);
        let path = [];
        let backtrack = finish;
        path.push(backtrack)
        while(backtrack) {
            path.push(parents[backtrack]);
            backtrack = parents[backtrack];
        }
        path = path.reverse()
        console.log(path)

        return [path, distances[finish]]
    }

    vertexWithMinDistance(distances, visited) {
        let minDistance = Infinity,
            minVertex = null;
        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < minDistance && !visited.has(vertex)) {
                minDistance = distance;
                minVertex = vertex;
            }
        }
        return minVertex;
    }
}

// let graph = new Graph()
// graph.dijkstra();