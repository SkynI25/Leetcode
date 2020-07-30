//https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    participant.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
    completion.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
    let i = 0, j = 0;
    while(i === j && i < participant.length && j < completion.length) {
        if(participant[i] === completion[j]) {
            i++;
            j++;
        } else {
            break;
        }
    }
    return participant[i];
}

