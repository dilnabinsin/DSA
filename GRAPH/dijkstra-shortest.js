function dijkstra(graph, start) {
    const dist = {};
    const visited = new Set();
    const pq = [[0, start]];

    for (let node in graph) dist[node] = Infinity;
    dist[start] = 0;

    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, node] = pq.shift();
        if (visited.has(node)) continue;
        visited.add(node);

        for (let [neighbor, weight] of graph[node]) {
            let newDist = currentDist + weight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([newDist, neighbor]);
            }
        }
    }

    return dist;
}

const weightedGraph = {
    A: [["B", 2], ["C", 4]],
    B: [["D", 1]],
    C: [["D", 3]],
    D: []
};

console.log("Dijkstra shortest distances:", dijkstra(weightedGraph, "A"));
