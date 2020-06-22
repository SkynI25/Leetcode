let maze = [
    [0,0,0,0,0,0,0,1],
    [0,1,1,0,1,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,0,0,1,1,0,0],
    [0,1,1,1,0,0,1,1],
    [0,1,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,1,1,0,1,0,0],
];

let N = 8;

(function () {
    const PATH_WAY = 0;
    const WALL = 1;
    const BLOCKED = 2;
    const PATH = 3;

    function findMazePath(x, y) {
        debugger
        if(x < 0 || y < 0 || x >= N || y >= N) {
            return false;
        } else if(maze[x][y] != PATH_WAY) {
            return false;
        } else if(x === N-1 && y === N-1) {
            maze[x][y] = PATH;
            return true;
        } else {
            maze[x][y] = PATH;
            if(findMazePath(x-1, y) || findMazePath(x, y+1) || findMazePath(x+1, y) || findMazePath(x, y-1)) {
                return true;
            }
            maze[x][y] = BLOCKED;
            return false;
        }
    }

    console.log(findMazePath(0, 0));
})();