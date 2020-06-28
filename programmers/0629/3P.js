// https://programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬

let nums = [3, 3, 3, 2, 2, 4];

(function () {
    let N = nums.length / 2;
    let setN = new Set(nums).size;
    let answer = N === setN ? N : Math.min(setN, N);
    console.log(answer);
    return answer;
})();