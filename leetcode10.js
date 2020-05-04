function fn() {
    let s = "aa";
    let p = "a";
    var isMatch = function(s, p) {
        let T = new Array(s.length+1);
        for(let i = 0; i < T.length; i++) {
            T[i] = new Array(p.length+1).fill(false);
        }
        T[0][0] = true;
        for(let i = 1; i < T[0].length; i++) {
            if(p[i-1] === '*') {
                T[0][i] = T[0][i-2];
            }
        }
        for(let i = 1; i < T.length; i++) {
            for(let j = 1; j < T[0].length; j++) {
                if(p[j-1] === '.' || p[j-1] === s[i-1]) {
                    T[i][j] = T[i-1][j-1];
                } else if(p[j-1] === '*') {
                    T[i][j] = T[i][j-2];
                    if(p[j-2] === '.' || p[j-2] === s[i-1]) {
                        T[i][j] = T[i][j] | T[i-1][j];
                    }
                } else {
                    T[i][j] = false;
                }
            }
        }
        return T[s.length][p.length];
        // const regex = new RegExp(p);
        // const result = s.match(regex) === null ? false : s.match(regex)[0];
        // return result === s ? true : false
    };
    console.log(isMatch(s, p));
}

(function () {
    fn();
})();