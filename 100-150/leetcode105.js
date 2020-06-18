let preorder = [3,9,20,15,7];
let inorder = [9,3,15,20,7];

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

(function () {
    function solve(tree, preorder) {
        if(tree.length === 0) {
            return;
        }
        let rootVal = preorder.shift();
        let root = new TreeNode(rootVal, null, null);
        let rootIndex = tree.indexOf(rootVal);
        let leftSub = tree.slice(0, rootIndex);
        let rightSub = tree.slice(rootIndex, tree.length);

        root.left = leftSub.length > 0 ? solve(leftSub, preorder) : undefined;
        root.right = rightSub.length > 0 ? solve(rightSub, preorder) : undefined;

        return root;
    }
    if(preorder.length === 0 || inorder.length === 0) {
        return [];
    }
    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal, null, null);

    let rootIndex = inorder.indexOf(rootVal);
    let leftSub = inorder.slice(0, rootIndex);
    let rightSub = inorder.slice(rootIndex, inorder.length);
    while(preorder.length > 0) {
        root.left = leftSub.length > 0 ? solve(leftSub, preorder) : undefined;
        root.right = rightSub.length > 0 ? solve(rightSub, preorder) : undefined;
    }

    return root;
})();