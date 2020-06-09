function merge(a, b) {
    if(a == null) {
        return b;
    }
    if(b == null) {
        return a;
    }
    if(a._priority < b._priority) {
        b.setLeft(merge(a, b._left));
        return b;
    }
    a.setRight(merge(a._right, b));
    return a;
}

function erase(root, key) {
    if(root == null) {
        return root;
    }
    if(root._key == key) {
        let ret = merge(root._left, root._right);
        return ret;
    }
    if(key < root._key) {
        root.setLeft(erase(root._left, key));
    } else {
        root.setRight(erase(root._right, key));
    }
    return root;
}

function kth(root, k) {
    let leftSize = 0;
    if(root._left != null) {
        leftSize = root._left._size;
    }
    if(k <= leftSize) {
        return kth(root._left, k);
    }
    if(k == leftSize + 1) {
        return root;
    }
    return kth(root._right, k - leftSize - 1);
}

function countLessThan(root, key) {
    if(root == null) {
        return 0;
    }
    if(root._key >= key) {
        return countLessThan(root._left, key);
    }
    let ls = root._left ? root._left._size : 0;
    return ls + 1 + countLessThan(root._right, key);
}

exports.erase = erase;
exports.kth = kth;
exports.countLessThan = countLessThan;