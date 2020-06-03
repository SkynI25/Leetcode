(function () {
    let preorder = [27, 16, 9, 12, 54, 36, 72];
    let inorder = [9, 12, 16, 27, 36, 54, 72];

    function printPostOrder(preorder, inorder) {
        let N = preorder.length;
        if(N === 0) {
            return;
        }
        let root = preorder[0];
        let L = inorder.indexOf(root);
        let R = N - L - 1;
        printPostOrder(preorder.slice(1, L+1), inorder.slice(0, L));
        printPostOrder(preorder.slice(L+1, N), inorder.slice(L+1, N));
        console.log(root);
    }

    printPostOrder(preorder, inorder);
})();