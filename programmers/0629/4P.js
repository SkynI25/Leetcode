// https://programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

let s = "baabaa";

(function () {
    let stack = [];
    for(let ch of s) {
        if(stack.length === 0 || stack[stack.length-1] !== ch) {
            stack.push(ch);
        } else {
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
})();