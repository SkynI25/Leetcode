// https://programmers.co.kr/learn/courses/30/lessons/42862
// 체육복
let n = 9;
let lost = [3, 4, 7, 8, 9];
let reserve = [1, 2, 3, 4, 5, 7, 8, 10];

(function () {
    debugger
    let size = 0;
    let lost_copy = lost.concat();
    lost_copy.forEach(cloth => {
        if(reserve.includes(cloth)) {
            reserve.splice(reserve.indexOf(cloth), 1);
            lost.splice(lost.indexOf(cloth), 1);
        }
    });
    console.log(lost ,reserve);
    let answer = n - lost.length;
    while(size < lost.length) {
        let lostCloth = lost[size];
        if(reserve.includes(lostCloth-1)) {
            reserve.splice(reserve.indexOf(lostCloth-1), 1);
            answer++;
        } else if(reserve.includes(lostCloth+1)) {
            reserve.splice(reserve.indexOf(lostCloth+1), 1);
            answer++;
        }
        size++;
    }
    console.log(answer);
    return answer;
})();