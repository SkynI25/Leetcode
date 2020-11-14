// https://programmers.co.kr/learn/courses/30/lessons/43105
// 정수 삼각형
let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

(function () {
    for(let i = 0; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            let current = triangle[i][j];
            if(i > 0 && j === 0) {
                triangle[i][j] = triangle[i-1][j] + current;
            } else if(i > 0 && j > 0) {
                triangle[i][j] = triangle[i-1][j-1] + current;
            }
            if(i > 0 && j > 0 && j < triangle[i].length-1) {
                triangle[i][j] = Math.max(triangle[i][j], triangle[i-1][j] + current)
            }
        }
    }
    let answer = -1;
    triangle[triangle.length-1].forEach(num => {
        if(answer < num) {
            answer = num;
        }
    });
    console.log(answer);
})();
