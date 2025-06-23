class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return isValidBST(root.left, min, root.value) &&
           isValidBST(root.right, root.value, max);
}

// ✅ Create a valid BST
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

// ✅ Test the function
console.log("Is valid BST:", isValidBST(root));