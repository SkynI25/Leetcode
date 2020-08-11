// https://programmers.co.kr/learn/courses/30/lessons/42587
let priorities = [1, 2, 3, 4]; 
//[1,1,9,1,1,1];
let location = 2;
//1;

(function () {
    debugger
    let answer = 0;
    let printIDs = new Array(priorities.length).fill(null).map((print,idx) => idx);
        
    while(priorities.length !== 0){
        let first = priorities.shift();

        if(priorities.some(current => current > first)) {
            priorities.push(first);
            printIDs.push(printIDs.shift());
        } else if(printIDs[0] === location) {
            answer += 1;
            break;
        } else {
            printIDs.shift();
            answer += 1;
        }
    }
    return answer;
})();