const strs = ["app", "ap", "p", "l", "e", "ple", "pp"];
const t = "apple";

(function () {
    const L = t.length;
    const dp = Array(L).fill(Number.MAX_SAFE_INTEGER);
    // [X, 1, 1, X, X]

    for (let i = 0; i < L; i++) {
        const substring = t.substring(0, i+1);
        for (let str of strs) {
            if (substring.endsWith(str)) {
                if (substring.length === str.length) {
                    dp[i] = 1;
                }
                else {
                    dp[i] = Math.min(dp[i], dp[i - str.length] + 1);
                }
            }
        }
    }
    
    return dp[L - 1] > L ? -1 : dp[L - 1];
})();