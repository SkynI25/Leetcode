class Node {
    constructor(key) {
        this._key = key;
        this._priority = Math.random();
        this._size = 1;
        this._left = null;
        this._right = null;
    }

    setLeft(newLeft) {
        this._left = newLeft;
        this.calcSize();
    }

    setRight(newRight) {
        this._right = newRight;
        this.calcSize();
    }

    calcSize() {
        this._size = 1;
        if(this._left) {
            this._size += this._left._size;
        }
        if(this._right) {
            this._size += this._right._size;
        }
    }
}

function split(root, key) {
    if(root == null) {
        return new Map([[null, null]]);
    }
    if(root._key < key) {
        let rs = split(root._right, key);
        root.setRight([...rs][0][0]);
        return new Map([[root, [...rs][0][1]]]);
    }
    let ls = split(root._left, key);
    root.setLeft([...ls][0][1]);
    return new Map([[[...ls][0][0], root]]);
}

function insert(root, node) {
    if(root == null) {
        return node;
    }
    if(root._priority < node._priority) {
        let splitted = split(root, node._key);
        node.setLeft([...splitted][0][0]);
        node.setRight([...splitted][0][1]);
        return node;
    } else if(node._key < root._key) {
        root.setLeft(insert(root._left, node));
    } else {
        root.setRight(insert(root._right, node));
    }
    return root;
}


let root = new Node(5);
root = insert(root, new Node(3));