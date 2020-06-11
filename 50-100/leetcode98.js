function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let root = [5,1,4,null,null,3,6];
(function () {
    function solve(root, min, max) {
        if(root === null) {
            return true;
        }
        if(root.val <= min || root.val >= max) {
            return false;
        }
        return solve(root.left, min, root.val) && solve(root.right, root.val, max);
    }
    
    return solve(root, -Infinity, Infinity);
})();