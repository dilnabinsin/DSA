class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Undirected graph
    }

    // Find shortest distance between two vertices using BFS
    shortestDistance(start, end) {
        if (!this.adjacencyList[start] || !this.adjacencyList[end]) {
            return -1; // One or both vertices don't exist
        }

        const visited = new Set();
        const queue = [[start, 0]]; // [vertex, distance]
        visited.add(start);

        while (queue.length > 0) {
            const [vertex, distance] = queue.shift();

            if (vertex === end) {
                return distance; // Found the target vertex
            }

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, distance + 1]);
                }
            }
        }

        return -1; // No path exists
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('E', 'F');

console.log(graph.shortestDistance('A', 'F')); // Output: 2 (A -> C -> F or A -> B -> E -> F)
console.log(graph.shortestDistance('B', 'C')); // Output: 2 (B -> A -> C)
console.log(graph.shortestDistance('D', 'F')); // Output: 3 (D -> B -> E -> F)
console.log(graph.shortestDistance('A', 'Z')); // Output: -1 (Z doesn't exist)