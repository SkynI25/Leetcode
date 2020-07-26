let s = "babbacbbbc";

(function () {
    function expandFromMiddle(s, start, end) {
        while(start >= 0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
        }
        return end - start - 1;
    }

    debugger

    let len1 = 0;
    let len2 = 0;
    let len = 0;
    let start = 0;
    let end = 0;

    for(let i = 0; i < s.length; i++) {
        len1 = expandFromMiddle(s, i, i);
        len2 = expandFromMiddle(s, i, i+1);
        len = Math.max(len1, len2);
        if(len > end - start) {
            start = i - parseInt((len-1)/2);
            end = i + parseInt(len/2);
        }
    }

    console.log(s.substring(start, end+1));
})();