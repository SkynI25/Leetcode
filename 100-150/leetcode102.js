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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let answer = [];
    if(root === null) {
        return answer;
    }
    let q = [];
    q.push(root);
    while(q.length > 0) {
        let size = q.length;
        let ans = [];
        
        for(let i = 0; i < size; i++) {
            let node = q.shift();
            ans.push(node.val);
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
        }
        answer.push(ans);
    }
    return answer;
};