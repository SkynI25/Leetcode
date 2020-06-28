// https://programmers.co.kr/learn/courses/30/lessons/12979
// 기지국 설치하기

let n = 11;
let stations = [4,11];
let w = 1;

(function () {
    let start = 0;
    let answer = 0;
    for(let station of stations) {
        let left = station - 1 - w;
        let right = station - 1 + w;
        if(start >= left && start <= right) {
            start = right + 1;
            continue;
        }
        answer += Math.ceil((left-start)/(w*2+1));
        start = right + 1;
    }
    if(start < n) {
        answer += Math.ceil((n-start)/(w*2+1));
    }
    console.log(answer);
})();