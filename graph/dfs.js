let adj = [[]];
let visited = new Array(adj.length).fill(false);

function dfs(here) {
    console.log("DFS visits");
    visited[here] = true;
    for(let i = 0; i < adj[here].length; ++i) {
        let there = adj[here][i];
        if(!visited[there]) {
            dfs(here);
        }
    }
}

function dfsAll() {
    for(let i = 0; i < adj.length; ++i) {
        if(!visited[i]) {
            dfs(i);
        }
    }
}