let n = 7;
for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++) {
        for(let k = j+1; k < n; k++) {
            for(let l = k+1; l < n; l++) {
                console.log(i, j, k, l);
            }
        }
    }
}

function overlap(n, picked, toPick) {
    if(toPick === 0) {
        console.log(picked);
        return;
    }
    const smallest = picked.length === 0 ? 0 : picked[picked.length-1] + 1;
    for(let next = smallest; next < n; next++) {
        picked.push(next);
        overlap(n, picked, toPick - 1);
        picked.pop();
    }
}

overlap(7, [], 4);