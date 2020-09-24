// https://programmers.co.kr/learn/courses/30/lessons/42842
let brown = 50;
let yellow = 22;
(function () {
    let oneSide = (brown-4)/2;
    let answer = [];
    for(let i = 1; i <= oneSide; i++) {
        let horizontal = oneSide - i;
        let vertical = i;
        if((brown + yellow) === (horizontal+2) * (vertical+2) && horizontal >= vertical) {
            answer = [horizontal+2, vertical+2];
            break;
        }
    }
    return answer;
})();