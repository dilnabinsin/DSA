function isBalanced(root) {
    function check(node) {
        if (!node) return 0;

        let left = check(node.left);
        if (left === -1) return -1;
        let right = check(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }

    return check(root) !== -1;
} 
let root = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

console.log(isBalanced(root));  // ✅ Output: true
