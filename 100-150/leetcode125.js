let s = "abcba";//"A man, a plan, a canal: Panama";

(function () {
    let start = 0;
    let end = s.length-1;

    while(start <= end) {
        if(/\w/.test(s[start]) && /\w/.test(s[end])) {
            if(s[start].toLowerCase() !== s[end].toLowerCase()) {
                console.log(false);
                return false;
            }
            start++;
            end--;
        } else if(/\W/.test(s[start])) {
            start++;
        } else if(/\W/.test(s[end])) {
            end--;
        }
    }
    console.log(true);
    return true;
})();