(function () {
    const BACKGROUND = 0;
    const IMAGE = 1;
    const COUNTED = 2;

    function countCells(x, y) {
        if(x < 0 || y < 0 || x >= N || y >= N) {
            return 0;
        } else if(grid[x][y] != IMAGE) {
            return 0;
        } else {
            grid[x][y] = COUNTED;
            return 1 + countCells(x-1, y+1) + countCells(x, y+1) + countCells(x+1, y+1) + countCells(x+1, y) + countCells(x+1, y-1) + countCells(x, y-1)
            + countCells(x-1, y-1) + countCells(x-1, y);
        }
    }
})();