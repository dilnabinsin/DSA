class Graph {
    constructor() {
        this.adjacencyList = {};
        this.vertices = [];
    }

    // Adjacency List Methods
    addVertexList(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.vertices.push(vertex);
        }
    }

    addEdgeList(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Undirected graph
    }

    // Adjacency Matrix Methods
    getVertexIndex(vertex) {
        return this.vertices.indexOf(vertex);
    }

    createAdjacencyMatrix() {
        const size = this.vertices.length;
        const matrix = Array(size).fill().map(() => Array(size).fill(0));
        
        for (let vertex of this.vertices) {
            const index = this.getVertexIndex(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                const neighborIndex = this.getVertexIndex(neighbor);
                matrix[index][neighborIndex] = 1;
                matrix[neighborIndex][index] = 1; // Undirected graph
            }
        }
        return matrix;
    }

    displayMatrix() {
        const matrix = this.createAdjacencyMatrix();
        console.log('Adjacency Matrix:');
        console.log('  ', this.vertices.join(' '));
        for (let i = 0; i < matrix.length; i++) {
            console.log(this.vertices[i], matrix[i].join(' '));
        }
    }

    displayList() {
        console.log('Adjacency List:');
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }
}

// Example usage:
const graph = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graph.addVertexList(v));
graph.addEdgeList('A', 'B');
graph.addEdgeList('A', 'C');
graph.addEdgeList('B', 'D');
graph.addEdgeList('B', 'E');
graph.addEdgeList('C', 'F');
graph.addEdgeList('E', 'F');

graph.displayList();
graph.displayMatrix();