// https://programmers.co.kr/learn/courses/30/lessons/42840
let answers = [1,2,3,4,5];
(function () {
    let prevNum = answers[0];
    let answer = [];
    let cnt = 0;
    let one = (ans) => ans.forEach((num,i) => {
        if(i !== 0) {
            cnt = num === prevNum+1 && (cnt+1);
        } else {
            cnt = num === prevNum && (cnt+1);
        }
        prevNum = num;
    });

    let two = (ans) => ans.forEach((num,i) => {
        if(i !== 0) {
            cnt = num === prevNum+1 && (cnt+1);
        } else {
            cnt = num === prevNum && (cnt+1);
        }
        prevNum = num;
    });
    one(answers);
    answer.push(cnt);
    console.log(answer);
})();