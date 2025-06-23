class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countSingleChildNodes(root) {
    if (!root) return 0;

    let count = 0;
    if ((root.left && !root.right) || (!root.left && root.right)) count++;

    count += countSingleChildNodes(root.left);
    count += countSingleChildNodes(root.right);

    return count;
}

// Build Tree
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.right = new TreeNode(8);
root.right.right = new TreeNode(20);

console.log("Count of single-child nodes:", countSingleChildNodes(root));
