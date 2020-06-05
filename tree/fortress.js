(function () {
    let n = 8;
    let x = [21,15,13,12,19,30,32,32];
    let y = [15,15,12,12,19,24,10,9];
    let radius = [20,10,5,3,2,5,7,4];
    let root = 0;

    function getTree(root) {
        let ret = [[]];
        for(let ch = 0; ch < n; ++ch) {
            if(isChild(root, ch)) {
                ret[0].push(getTree(ch));
            }
        }
        return ret;
    }
    let sqr = function(x) {
        return x * x;
    }
    let sqrdist = function(a, b) {
        return sqr(y[a] - y[b]) + sqr(x[a] - x[b]);
    }
    let encloses = function(a, b) {
        return radius[a] > radius[b] && sqrdist(a, b) < sqr(radius[a] - radius[b]);
    }
    let isChild = function(parent, child) {
        if(!encloses(parent, child)) {
            return false;
        }
        for(let i = 0; i < n; i++) {
            if(i != parent && i != child && encloses(parent, i) && encloses(i, child)) {
                return false;
            }
        }
        return true;
    }

    debugger
    let longest = 0;
    let ret = getTree(root);

    function height(root) {
        let heights = [];
        for(let i = 0; i < root[0].length; ++i) {
            heights.push(height(root[0][i]));
        }
        if(heights.length === 0) {
            return 0;
        }
        heights.sort();
        if(heights.length >= 2) {
            longest = Math.max(longest, 2 + heights[heights.length - 2] + heights[heights.length - 1]);
        }
        return heights[heights.length-1] + 1;
    }

    function solve(root) {
        longest = 0;
        let h = height(root);
        return Math.max(longest, h);
    }

    console.log(solve(ret));
})();