let root = [1,2,2,3,4,4,3];

(function () {
    return solve(root, root);
    
    function solve(t1, t2) {
        if(t1 === null && t2 === null) {
            return true;
        }
        if(t1 === null || t2 === null) {
            return false;
        }
        return t1.val === t2.val && solve(t1.right, t2.left) && solve(t1.left, t2.right);
    }
})();