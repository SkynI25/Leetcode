let numRows = 5;

(function () {
    let answer = [];
    for(let i = 0; i < numRows; i++) {
        let row = [];
        for(let j = 0; j < i+1; j++) {
            if(j == 0 || j == i) {
                row.push(1);
            } else {
                row.push(answer[i-1][j-1] + answer[i-1][j]);
            }
        }
        answer.push(row);
    }
    console.log(answer);
})();