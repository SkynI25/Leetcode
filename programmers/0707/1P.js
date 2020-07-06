// https://programmers.co.kr/learn/courses/30/lessons/12985
// 예상 대진표
let n = 8;
let a = 4;
let b = 7;

(function () {
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    return answer;
})();