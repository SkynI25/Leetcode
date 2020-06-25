// https://programmers.co.kr/learn/courses/30/lessons/12982
// 예산

let d = [1,3,2,5,4];
let budget = 9;

(function () {
    let answer = 0;
    if(budget.length === 0) {
        return answer;
    }
    d = d.sort((a,b) => a-b);
    for(let i = 0; i < d.length; i++) {
        if(budget >= d[i]) {
            budget -= d[i];
            answer++;
        } else {
            break;
        }
    }
    return answer;
})();