let adj = [[]];

function makeGraph(words) {
    for(let i = 0; i < 26; i++) {
        adj[i] = new Array(26).fill(0);
    }
    for(let j = 1; j < words.length; ++j) {
        let i = j - 1;
        let len = Math.min(words[i].length, words[j].length);
        for(let k = 0; k < len; ++k) {
            if(words[i][k] != words[j][k]) {
                let a = words[i][k].charCodeAt(0) - 97;
                let b = words[j][k].charCodeAt(0) - 97;
                adj[a][b] = 1;
                break;
            }
        }
    }
}

let seen = [];
let order = [];

function dfs(here) {
    seen[here] = true;
    for(let there = 0; there < adj.length; ++there) {
        if(adj[here][there] == 1 && !seen[there]) {
            dfs(there);
        }
    }
    order.push(here);
}

function topologicalSort() {
    let m = adj.length;
    seen = new Array(m).fill(false);
    order = [];
    for(let i = 0; i < m; ++i) {
        if(!seen[i]) {
            dfs(i);
        }
    }
    debugger
    order.reverse();
    for(let i = 0; i < m; ++i) {
        for(let j = i + 1; j < m; ++j) {
            if(adj[order[j]][order[i]] == 1) {
                return [];
            }
        }
    }
    return order;
}

function init() {
    let words = ["gg", "kia", "lotte", "lg", "hanwha"];
    makeGraph(words);
    let solve = topologicalSort();
    let ans = "";
    if(solve.length == 0) {
        console.log("INVALID HYPOTHESIS");
    } else {
        for(let i = 0; i < solve.length; ++i) {
            ans += String.fromCharCode(solve[i] + 97);
        }
        console.log(ans);
    }
}

init();