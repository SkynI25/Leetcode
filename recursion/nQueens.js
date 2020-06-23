let cols = new Array(N+1);
function queens(level) {
    if(!promising(level)) {
        return false;
    } else if(level === N) {
        return true;
    }
    for(let i = 1; i <= N; i++) {
        cols[level+1] = i;
        if(queens(level+1)) {
            return true;
        }
    }
    return false;
}

function promising(level) {
    for(let i = 1; i < level; i++) {
        if(cols[i] === cols[level]) {
            return false;
        } else if(level-i === Math.abs(cols[i] - cols[level])) {
            return false;
        }
    }
    return true;
}