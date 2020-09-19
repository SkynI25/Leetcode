// https://programmers.co.kr/learn/courses/30/lessons/42840
let answers = [1,3,2,4,2];
//[1,2,3,4,5];
(function () {
    let answer = [];
    let cntList = [];
    let listCnt = 0;
    let oneCntList = [1,2,3,4,5];
    let twoCntList = [2,1,2,3,2,4,2,5];
    let threeCntList = [3,3,1,1,2,2,4,4,5,5];
    let one = (list) => {
        list.forEach((item,i) => {
            listCnt = item === oneCntList[i%5] ? listCnt+1 : listCnt;
        });
    }
    let two = (list) => {
        list.forEach((item,i) => {
            listCnt = item === twoCntList[i % 8] ? listCnt+1 : listCnt;
        });
    }
    let three = (list) => {
        list.forEach((item,i) => {
            listCnt = item === threeCntList[i % 10] ? listCnt+1 : listCnt;
        })
    }
    one(answers)
    cntList.push(listCnt);
    listCnt = 0;
    two(answers);
    cntList.push(listCnt);
    listCnt = 0;
    three(answers);
    cntList.push(listCnt);

    let maxCnt = 0;
    cntList.forEach(cnt => {
        maxCnt = Math.max(cnt, maxCnt);
    });
    cntList.forEach((cnt,i) => cnt === maxCnt ? answer.push(i+1) : null);
})();