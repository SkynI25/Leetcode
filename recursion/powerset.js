let data = ["a", "b", "c"];
let n = data.length;
let include = new Array(n).fill(false);

function powerSet(k) {
    debugger
    if(k === n) {
        let str = "";
        for(let i = 0; i < n; i++) {
            if(include[i]) {
                str += `${data[i]} `;
            }
        }
        if(str === "") {
            console.log(0);
        } else {
            console.log(str);
        }
        return;
    }
    include[k] = false;
    powerSet(k+1);
    include[k] = true;
    powerSet(k+1);
}

powerSet(0);