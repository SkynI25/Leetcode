// let input = [];
// require('readline')
// .createInterface(process.stdin, {})
// .on('line', function(line) {
//     let tests = data[0];
//     let pairArray = [];
//     let pairFriend = data.split('\n').map((el, i) => {
//         let tempPair = null;
//         if(i !== 0) {
//             pairArray.push(el.split(" "));
//         }
//         if(i % 2 === 0) {
//             tempPair = pairArray.concat();
//         }
//         return pairArray.length === 0 ? tempPair : pairArray;
//     });
// }).on('close', function() {
//     console.log(pairFriend);
// });
let data = `3 
2 1 
0 1 
4 6 
0 1 1 2 2 3 3 0 0 2 1 3 
6 10 
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4`;

(function () {
    debugger
    let testArray = data.split('\n').filter((el, i) => i !== 0);
    let testsNum = parseInt(data[0]);
    let testCase = [];
    for(let i = 0; i < testsNum; i++) {
        let testCnt = 0;
        let pairArray = [];
        let num = (data.split('\n').length-1)/testsNum;
        let pairFriend = testArray.splice(0, num).map((el, i) => {
            pairArray.push(...el.trim().split(" "));
            testCnt++;
            if(testCnt >= num) {
                return pairArray;
            }
        }).filter(el => !!el);
        testCase.push(pairFriend);
    }
    
    console.log(testCase);
})();

