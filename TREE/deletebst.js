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

function deleteNode(root, key) {
    if (!root) return null;

    if (key < root.value) root.left = deleteNode(root.left, key);
    else if (key > root.value) root.right = deleteNode(root.right, key);
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let successor = root.right;
        while (successor.left) successor = successor.left;
        root.value = successor.value;
        root.right = deleteNode(root.right, successor.value);
    }
    return root;
}

// Inorder traversal to print sorted BST
function inorder(root) {
    if (!root) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}

// Build BST
let root = null;
let values = [50, 30, 70, 20, 40, 60, 80];
values.forEach(val => root = insert(root, val));

console.log("Inorder before deletion:");
inorder(root);

root = deleteNode(root, 70);  // Delete node with two children

console.log("Inorder after deleting 70:");
inorder(root);
