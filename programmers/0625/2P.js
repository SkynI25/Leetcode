// https://programmers.co.kr/learn/courses/30/lessons/12984
// 지형편집

let land =  [[1, 2], [2, 3]];
//[[4, 4, 3], [3, 2, 2], [ 2, 1, 0 ]];
let P = 3;
let Q = 2;

(function () {
    function calc(mid, land, P, Q) {
        let answer = 0;
        for(let i = 0; i < land.length; i++) {
            for(let j = 0; j < land[i].length; j++) {
                if(mid < land[i][j]) {
                    answer += (land[i][j] - mid) * Q;
                } else if(mid > land[i][j]) {
                    answer += (mid - land[i][j]) * P;
                }
            }
        }
        return answer;
    }
    let answer = 0;
    if(land.length === 0) {
        return answer;
    }
    let tempLand = [];
    land.forEach(el => {
        tempLand = tempLand.concat(el);
    });
    let landSet = new Set(tempLand);
    let landArr = [...landSet];
    let maxValue = -Infinity;
    let minValue = Infinity;
    debugger

    landArr.forEach(el => {
        maxValue = Math.max(el, maxValue);
        minValue = Math.min(el, minValue);
    });
    
    let mid = 0;
    while(minValue <= maxValue) {
        mid = parseInt((minValue + maxValue) / 2);
        if(minValue === maxValue) {
            break;
        }
        let result1 = calc(mid, land, P, Q);
        let result2 = calc(mid+1, land, P, Q);
        if(result1 < result2) {
            maxValue = mid;
        } else if(result1 === result2) {
            break;
        } else {
            minValue = mid + 1;
        }
    }
    answer = calc(mid, land, P, Q);
    console.log(answer);

    /*
    let answer = 0;
    if(land.length === 0) {
        return answer;
    }
    answer = Infinity;
    let tempLand = [];
    land.forEach(el => {
        tempLand = tempLand.concat(el);
    });
    let landSet = new Set(tempLand);
    let landArr = [...landSet];
    
    let idx = 0;
    debugger
    while(idx < landArr.length) {
        let compAnswer = 0;
        for(let i = 0; i < land.length; i++) {
            for(let j = 0; j < land[i].length; j++) {
                if(landArr[idx] < land[i][j]) {
                    compAnswer += (land[i][j] - landArr[idx]) * Q;
                } else if(landArr[idx] > land[i][j]) {
                    compAnswer += (landArr[idx] - land[i][j]) * P;
                }
            }
        }
        answer = Math.min(answer, compAnswer);
        idx++;
    } */
    return calc(mid, land, P, Q);
})();