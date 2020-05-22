let s = "1222222";

(function () {
    if(s.length === 0) {
        return 0;
    }
    const n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    for(let i = 2; i <= n; i++) {
        debugger
        let first = Number(s.substring(i - 1, i));
        let second = Number(s.substring(i - 2, i));
        if(first >= 1 && first <= 9) {
            dp[i] += dp[i-1];
        }
        if(second >= 10 && second <= 26) {
            dp[i] += dp[i-2];
        }
    }
    console.log(dp[n]);
    return dp[n];
})();