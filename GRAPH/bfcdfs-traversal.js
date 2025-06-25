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
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    // Depth-First Search (DFS) - Iterative
    dfs(start) {
        const result = [];
        const visited = new Set();
        const stack = [start];

        while (stack.length > 0) {
            const vertex = stack.pop();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                for (let neighbor of this.adjacencyList[vertex].reverse()) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    // Breadth-First Search (BFS) - Iterative
    bfs(start) {
        const result = [];
        const visited = new Set();
        const queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
    countCycles() {
        const visited = new Set();
        let cycleCount = 0;

        const dfs = (vertex, parent) => {
            visited.add(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor, vertex);
                } else if (neighbor !== parent) {
                    cycleCount++; // Back edge indicates a cycle
                }
            }
        };

        // Run DFS from each unvisited vertex to handle disconnected components
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                dfs(vertex, null);
            }
        }

        // Divide by 2 as each cycle is counted twice in undirected graph
        return cycleCount / 2;
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
// ['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graph.addVertex(v));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('E', 'F');

console.log("DFS:", graph.dfs('A')); // Example output: ['A', 'B', 'D', 'E', 'F', 'C']
console.log("BFS:", graph.bfs('A')); // Example output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log("Number of cycles:", graph.countCycles());