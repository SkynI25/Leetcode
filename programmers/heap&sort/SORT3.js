// https://programmers.co.kr/learn/courses/30/lessons/42747
let citations = [3, 0, 6, 1, 5];
(function () {
    citations.sort((a,b) => b - a);
    let answer = 0;
    for(let i = 0; i < citations.length; i++) {
        let citaNum = 0;
        let currentCita = citations[i];
        for(let j = 0; j < citations.length; j++) {
            if(citations[j] >= currentCita) {
                citaNum++;
            }
        }
        if(currentCita >= citaNum) {
            answer = Math.max(citaNum, answer);
        }
    }
    console.log(answer);
})();