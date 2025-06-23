class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function printLeaves(root) {
    if (!root) return;
    if (!root.left && !root.right) console.log(root.value);
    printLeaves(root.left);
    printLeaves(root.right);
}

// Sample Tree
//       10
//      /  \
//     5    15
//    / \     \
//   2   7     20

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

console.log("Leaf nodes:");
printLeaves(root);
