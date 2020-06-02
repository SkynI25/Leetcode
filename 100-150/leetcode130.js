let board = [["O","O","O"],["O","O","O"],["O","O","O"]];
//[["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","X","O","X","O","O","O","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]];
// [
// ["O","X","X","X","X","X","O","O"],
// ["O","O","O","X","X","X","X","O"],
// ["X","X","X","X","O","O","O","O"],
// ["X","O","X","O","O","X","X","X"],
// ["O","X","O","X","X","X","O","O"],
// ["O","X","X","O","O","X","X","O"],
// ["O","X","O","X","X","X","O","O"],
// ["O","X","X","X","X","O","X","X"]];

(function() {
    function check(arr, i, j, row, col) {
        if(arr[i][j] === "O") {
            arr[i][j] = "1";
            if(i > 1) {
                check(arr, i-1, j, row, col);
            }
            if(j > 1) {
                check(arr, i, j-1, row, col);
            }
            if(i+1 < row) {
                check(arr, i+1, j, row, col);
            }
            if(j+1 < col) {
                check(arr, i, j+1, row, col);
            }
        }
    }
    let row = board.length;
    if(row === 0) {
        return;
    }
    let col = board[0].length;

    for(let i = 0; i < row; i++) {
        check(board, i, 0, row, col);
        if(col > 1) {
            check(board, i, col-1, row, col);
        }
    }
    for(let j = 1; j+1 < col; j++) {
        check(board, 0, j, row, col);
        if(row > 1) {
            check(board, row-1, j, row, col);
        }
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(board[i][j] === "O") {
                board[i][j] = "X";
            } else if(board[i][j] === "1") {
                board[i][j] = "O";
            }
        }
    }
    /*
    let forbiddenList = new Set();
    for(let i = 1; i < board.length-1; i++) {
        for(let j = 1; j < board[i].length-1; j++) {
            if(board[i][j] === "O") {
                if((i-1 === 0 && board[i-1][j] === "O") || (j-1 === 0 && board[i][j-1] === "O")) {
                    forbiddenList.add(`${i}${j}`);
                    let k = i;
                    let l = j;
                    while(board[k][l] === "O") {
                        if(k !== 0 && board[k-1][l] === "O" && !forbiddenList.has(`${k-1}${l}`)) {
                            forbiddenList.add(`${k-1}${l}`);
                            k--;
                        } else if(l !== board[k].length-1 && board[k][l+1] === "O" && !forbiddenList.has(`${k}${l+1}`)) {
                            forbiddenList.add(`${k}${l+1}`);
                            l++;
                        } else if(k !== board.length-1 && board[k+1][l] === "O" && !forbiddenList.has(`${k+1}${l}`)) {
                            forbiddenList.add(`${k+1}${l}`);
                            k++;
                        } else if(l !== 0 && board[k][l-1] === "O" && !forbiddenList.has(`${k}${l-1}`)) {
                            forbiddenList.add(`${k}${l-1}`);
                            l--;
                        } else {
                            break;
                        }
                    }
                } else if(forbiddenList.has(`${i-1}${j}`) || forbiddenList.has(`${i}${j-1}`)) {
                    forbiddenList.add(`${i}${j}`);
                }
            }
        }
    }
    for(let i = board.length-2; i > 0; i--) {
        for(let j = board[i].length-2; j > 0; j--) {
            if(board[i][j] === "O") {
                if((i+1 === board.length-1 && board[i+1][j] === "O") || (j+1 === board[i].length-1 && board[i][j+1] === "O")) {
                    forbiddenList.add(`${i}${j}`);
                    let k = i;
                    let l = j;
                    while(board[k][l] === "O") {
                        if(k !== 0 && board[k-1][l] === "O" && !forbiddenList.has(`${k-1}${l}`)) {
                            forbiddenList.add(`${k-1}${l}`);
                            k--;
                        } else if(l !== board[k].length-1 && board[k][l+1] === "O" && !forbiddenList.has(`${k}${l+1}`)) {
                            forbiddenList.add(`${k}${l+1}`);
                            l++;
                        } else if(k !== board.length-1 && board[k+1][l] === "O" && !forbiddenList.has(`${k+1}${l}`)) {
                            forbiddenList.add(`${k+1}${l}`);
                            k++;
                        } else if(l !== 0 && board[k][l-1] === "O" && !forbiddenList.has(`${k}${l-1}`)) {
                            forbiddenList.add(`${k}${l-1}`);
                            l--;
                        } else {
                            break;
                        }
                    }
                } else if(forbiddenList.has(`${i+1}${j}`) || forbiddenList.has(`${i}${j+1}`)) {
                    forbiddenList.add(`${i}${j}`);
                }
            }
        }
    }
    for(let i = 1; i < board.length-1; i++) {
        for(let j = board[i].length-2; j > 0; j--) {
            if(board[i][j] === "O") {
                if((i-1 === 0 && board[i-1][j] === "O") || (j+1 === board[i].length-1 && board[i][j+1] === "O")) {
                    forbiddenList.add(`${i}${j}`);
                } else if(forbiddenList.has(`${i-1}${j}`) || forbiddenList.has(`${i}${j-1}`)) {
                    forbiddenList.add(`${i}${j}`);
                }
            }
        }
    }
    for(let i = board.length-2; i > 0; i--) {
        for(let j = 1; j < board[i].length-1; j++) {
            if(board[i][j] === "O") {
                if((i+1 === board.length-1 && board[i+1][j] === "O") || (j-1 === 0 && board[i][j-1] === "O")) {
                    forbiddenList.add(`${i}${j}`);
                } else if(forbiddenList.has(`${i+1}${j}`) || forbiddenList.has(`${i}${j+1}`)) {
                    forbiddenList.add(`${i}${j}`);
                }
            }
        }
    }
    for(let i = 1; i < board.length-1; i++) {
        for(let j = 1; j < board[i].length-1; j++) {
            if(board[i][j] === "O" && !forbiddenList.has(`${i}${j}`)) {
                board[i][j] = "X";
            }
        }
    } */
    console.log(board);
})();