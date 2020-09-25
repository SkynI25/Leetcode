(function () {
    function search(data, n, target) {
        for(let i = 0; i < n; i++) {
            if(data[i] === target) {
                return i;
            }
        }
        return -1;
    }

    function search2(data, begin, end, target) {
        if(begin > end) {
            return -1;
        } else if(target === items[begin]) {
            return begin;
        } else {
            return search2(data, begin+1, end, target);
        }
    }
})();