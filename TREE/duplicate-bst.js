class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this._insert(this.root, val);
  }

  _insert(node, val) {
    if (node === null) return new TreeNode(val);

    if (val < node.val) {
      node.left = this._insert(node.left, val);
    } else {
      // Allow duplicates on right
      node.right = this._insert(node.right, val);
    }

    return node;
  }

  // In-order traversal to check structure
  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }
}
const bst = new BST();
[5, 3, 7, 3, 7, 5].forEach(v => bst.insert(v));
bst.inorder(); // Prints sorted list with duplicates
