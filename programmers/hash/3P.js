// https://programmers.co.kr/learn/courses/30/lessons/42578

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

(function () {
    const clothesMap = new Map();
    let answer = 0;
    clothesMap.set(clothes[0][1], [clothes[0][0]]);
    for(let i = 1; i < clothes.length; i++) {
        if(clothesMap.has(clothes[i][1])) {
            clothesMap.get(clothes[i][1]).push(clothes[i][0]);
        } else {
            clothesMap.set(clothes[i][1],[clothes[i][0]]);
        }
    }
    // (A+1)(B+1)(C+1) = ABC + AB + BC + AC + A + B + C + 1
    answer = [...clothesMap.entries()].reduce((a,h) => a *= h[1].length+1, 1);
    
    return answer - 1;
})