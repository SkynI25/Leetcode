// https://programmers.co.kr/learn/courses/30/lessons/43104
// 타일 장식물
let N = 6;
(function() {
    let fibonacci = [1,1];
    for(let i = 2; i < N; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    };
    return fibonacci[N-1] * 4 + fibonacci[N-2] * 2;
})();