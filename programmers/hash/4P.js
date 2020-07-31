// https://programmers.co.kr/learn/courses/30/lessons/42579
let genres = ["classic", "pop", "classic", "classic","pop", "pop"];
let plays = [500, 600, 150, 800,2500, 2500];

(function () {
    debugger
    let playMap = new Map();
    plays.forEach((play,idx) => playMap.set(idx, play));
    let sortedPlaysIdx = [...playMap.entries()].sort((a,b) => b[1] - a[1]).map(play => play[0]);
    let sortedGen = [];
    sortedPlaysIdx.forEach(play => sortedGen.push(genres[play]));

    let genMap = new Map();
    sortedPlaysIdx.forEach(idx => {
        const genre = genres[idx];
        if(genMap.has(genre)) {
            let {total, lists} = genMap.get(genre);
            total += plays[idx];
            lists.push(idx);
            genMap.set(genre, {
                total,
                lists
            })
        } else {
            genMap.set(genre, {
                total: plays[idx],
                lists: [idx]
            });
        }
    });
    const answer = [];
    [...genMap.values()].sort((a,b) => b.total - a.total).forEach(({lists}) => {
        if(lists.length > 0) {
            answer.push(lists[0])  
        }
        if(lists.length > 1) {
            answer.push(lists[1])  
        }
    });
    console.log(answer);
})();