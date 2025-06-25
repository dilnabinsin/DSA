// class Node {
//   constructor(val) {
//     this.val = val;
//     this.neighbors = [];    
//   }
// }


//leetcode 
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(node) {
        if (visited.has(node.val)) {
            return visited.get(node.val);
        }

        const clone = new Node(node.val);
        visited.set(node.val, clone);

        clone.neighbors = node.neighbors.map(neighbor => dfs(neighbor));

        return clone;
    }

    return dfs(node);
};


// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);

// node1.neighbors = [node2, node4];
// node2.neighbors = [node1, node3];
// node3.neighbors = [node2, node4];
// node4.neighbors = [node1, node3];

// Clone the graph
// const clonedGraph = cloneGraph(node1);

// // Print graph utility
// function printGraph(node, visited = new Set()) {
//   if (!node || visited.has(node.val)) return;

//   visited.add(node.val);
//   const neighborVals = node.neighbors.map(n => n.val);
//   console.log(`Node ${node.val} -> [${neighborVals.join(', ')}]`);

//   for (let neighbor of node.neighbors) {
//     printGraph(neighbor, visited);
//   }
// }

// console.log("Original Graph:");
// printGraph(node1);

// console.log("\nCloned Graph:");
// printGraph(clonedGraph);
