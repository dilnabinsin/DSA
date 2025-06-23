class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insert(root, value) {
    if (!root) return new TreeNode(value);
    if (value < root.value) root.left = insert(root.left, value);
    else root.right = insert(root.right, value);
    return root;
}

function findMin(root) {
    if (!root.left) return root.value;
    return findMin(root.left);
}

// Create BST
let root = null;
[50, 30, 70, 20, 40, 60, 80].forEach(val => root = insert(root, val));

console.log("Minimum value in BST:", findMin(root));
