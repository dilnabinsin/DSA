function shortestPathBFS(graph, start, end) {
    const queue = [[start, 0]];
    const visited = new Set();

    while (queue.length) {
        let [node, dist] = queue.shift();
        if (node === end) return dist;
        visited.add(node);
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) queue.push([neighbor, dist + 1]);
        }
    }
    return -1; // not reachable
}
const graph1 = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
};
console.log("Shortest path A -> F:", shortestPathBFS(graph1, "A", "F"));