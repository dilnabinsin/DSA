class MultiTreeNode {
    constructor(value) {
        this.value = value;
        this.children = []; // holds multiple child nodes
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
    
}
    function printMultiTree(node, depth = 0) {
    if (!node) return;
    console.log("  ".repeat(depth) + node.value); // Indented by depth
    for (let child of node.children) {
        printMultiTree(child, depth + 1);
    }
}


const root = new MultiTreeNode("Root");

// Add children to root
const child1 = new MultiTreeNode("Child1");
const child2 = new MultiTreeNode("Child2");
const child3 = new MultiTreeNode("Child3");

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

// Add children to child1
child1.addChild(new MultiTreeNode("Child1.1"));
child1.addChild(new MultiTreeNode("Child1.2"));

// Add children to child2
const child2_1 = new MultiTreeNode("Child2.1");
child2.addChild(child2_1);

// Add children to child2.1
child2_1.addChild(new MultiTreeNode("Child2.1.1"));

// Print the tree
console.log("Multi-Child Tree Structure:");
printMultiTree(root);
