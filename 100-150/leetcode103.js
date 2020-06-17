let root = [3,9,20,null,null,15,7];

(function () {
    let answer = [];
    if(root === null) {
        return answer;
    }
    let q = [];
    q.push(root);
    let zigzag = false;
    while(q.length > 0) {
        let ans = [];
        let size = q.length;

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
        if(zigzag) {
            ans = ans.reverse();
        }
        zigzag = !zigzag;
        answer.push(ans);
    }

    return answer;
})();