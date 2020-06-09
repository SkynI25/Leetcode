const func = require('./treap_func.js');
const Node = require('./treap.js');

function insertionSort(A) {
    for(let i = 0; i < A.length; ++i) {
        let j = i;
        while(j > 0 && A[j-1] > A[j]) {
            let temp = A[j-1];
            A[j-1] = A[j];
            A[j] = temp;
            --j;
        }
    }
}

let n = 5;
let shifted = [0, 1, 1, 2, 3];
let A = new Array(5);

function solve() {
    let candidates = null;
    for(let i = 0; i < n; ++i) {
        candidates = Node.insert(candidates, new Node.Node(i+1));
    }
    for(let i = n-1; i >=0; --i) {
        if(i == 2) {
            debugger
        }
        let larger = shifted[i];
        let k = func.kth(candidates, i + 1 - larger);
        A[i] = k._key;
        candidates = func.erase(candidates, k._key);
    }
    console.log(A);
}

solve();