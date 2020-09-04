// https://programmers.co.kr/learn/courses/30/lessons/42627
let jobs= [[0, 3], [1, 9], [2, 6]];
(function () {
    let total = jobs.length;
    let answer = 0;
    let waitTime = 0;
    let queue = [];
    while(true) {
        let index = 0;
        while(true) {
            if(index >= jobs.length) {
                break;
            }
            if(jobs[index][0] <= waitTime) {
                queue.push(jobs.splice(index,1)[0])
            } else {
                index++;
            }
        }

        if(queue.length === 0) {
            if(jobs.length === 0) {
                break;
            } else {
                waitTime++;
            }
        } else {
            let minIndex = 0;
            for(let i = 1; i < queue.length; i++) {
                if(queue[minIndex][1] > queue[i][1]) {
                    minIndex = i;
                }
            }
            waitTime += queue[minIndex][1];

            answer += waitTime - queue[minIndex][0];

            queue.splice(minIndex, 1);
        }
    }

    console.log(Math.floor(answer/total));
    return Math.floor(answer/total);
})();