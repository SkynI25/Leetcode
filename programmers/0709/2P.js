// https://programmers.co.kr/learn/courses/30/lessons/42883
// 큰 수 만들기

let number = "4177252841";
let k = 4;

(function () {
    let L = number.length;
    let size = L - k;
    let start = 0;
    let end = k;
    let answer = "";
    let maxVal = 0;

    debugger
    for(let i = 0; i < size; i++) {
        for(let j = start; j <= end; j++) {
            if(Number(number[j]) > maxVal) {
                maxVal = Number(number[j]);
                start = j + 1;
            }
            if(Number(number[j]) === 9) {
                break;
            }
        }
        answer += maxVal;
        end += 1;
        maxVal = 0;
    }
    console.log(answer);
})();