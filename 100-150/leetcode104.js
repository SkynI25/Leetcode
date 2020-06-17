let root = [3,9,20,null,null,15,7];

(function () {
    function solve(root, num) {
        let leftM = num;
        let rightM = num;
        if(root.left) {
            leftM = solve(root.left, num+1);
        }
        if(root.right) {
            rightM = solve(root.right, num+1);
        }
        return leftM > rightM ? leftM : rightM;
    }

    let answer = 0;
    if(root === null) {
        return answer;
    }

    answer = solve(root, answer+1);
    return answer;
})();