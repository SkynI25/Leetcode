/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = [1,null,2,3];

(function() {
    let treeList = [];
    let stack = [];
    let current = root;
    while(current != null || stack.length !== 0) {
        while(current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        treeList.push(current.val);
        current = current.right;
    }
    console.log(treeList);
    /* first solution
    function helper(root, list) {
        if(root !== null) {
            if(root.left !== null) {
                helper(root.left, list);
            }
            list.push(root.val);
            if(root.right !== null) {
                helper(root.right, list);
            }
        }
    }
    let treeList = [];
    helper(root, treeList);
    console.log(treeList); */
})();