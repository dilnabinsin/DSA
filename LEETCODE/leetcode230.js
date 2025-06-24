 function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (node === null || count >= k) return;
        inorder(node.left);
        count++;
        if (count === k) result = node.val;
        inorder(node.right);
    }

    inorder(root);
    return result;
};
