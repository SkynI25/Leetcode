let arr = [1,2,3,4,5];
function sum1() {
    //let answer = arr.reduce((a,h) => a += h);
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
}

let answer = 0;

function sum2(n) {
    return n === 1 ? 1 : n + sum2(n-1);
}

console.log(sum2(5));