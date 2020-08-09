// https://programmers.co.kr/learn/courses/30/lessons/42583
let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];
(function () {
    let queue = [];
    let answer = 0;
    let trucksTime = [];
    debugger
    while(queue.length > 0 || truck_weights.length > 0) {
        trucksTime = trucksTime.map(time => time -= 1);
        if(trucksTime[0] === 0 && queue.length > 0 && queue[0]) {
            queue.shift();
            trucksTime.shift();
        }
        if(truck_weights[0] + queue.reduce((a,h) => a += h, 0) <= weight) {
            queue.push(truck_weights.shift());
            trucksTime.push(bridge_length);
        }
        answer++;
    }
    console.log(answer);
    return answer;
})();