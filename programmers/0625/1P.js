// https://programmers.co.kr/learn/courses/30/lessons/12987
// 숫자 게임

let A = [5,1,10,7];
let B = [2,2,6,7];

(function () {
    let answer = 0;
    let i = 0, j = 0;
    let N = A.length;
    A = A.sort((a,b) => b-a);
    B = B.sort((a,b) => b-a);
    while(i < N && j < N) {
        if(B[j] <= A[i]) {
            i++;
        } else if(B[j] > A[i]) {
            i++;
            j++;
            answer += 1;
        }
    }
    console.log(answer);
})();