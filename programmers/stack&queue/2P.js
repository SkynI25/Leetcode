// https://programmers.co.kr/learn/courses/30/lessons/42583
let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];
(function () {
    let queue = [];
    let answer = 0;
    while(queue.length > 0 && truck_weights.length > 0) {
        let i = 0;
        while(i < bridge_length || queue.length > 0) {
            queue.length > 0 && queue[0] ? queue.shift() : null;
            let truck = truck_weights.length > 0 ? truck_weights[0] : weight;
            queue.reduce((a,h) => a += h) + truck > weight
            ? null
            : queue.push(truck_weights.shift());
            answer++;
            i++;
        }
    }
    console.log(answer);
    return answer;
})();