let nums = [1,2,3];

(function () {
    // backtracking
    let answer = [];
    let k = 0;
    let n = 0;
    debugger
    function recursive(idx=0, arr=[]) {
        if(arr.length === k) {
            answer.push(arr);
        }
        for(let i = idx; i < n; i++) {
            arr.push(nums[i]);
            recursive(i+1, arr.concat());
            arr.pop();
        }
    }
    n = nums.length;
    for(k = 0; k < n+1; k++) {
        recursive();
    }
    return answer;

    // first solution
    // let answer = [];
    // function recursive(arr, idx) {
    //     if(arr.length === nums.length - 1) {
    //         return;
    //     }
    //     let recursiveArr = [];
    //     for(let i = idx + 1; i < nums.length; i++) {
    //         recursiveArr = arr.concat();
    //         recursiveArr.push(nums[i]);
    //         answer.push(recursiveArr);
    //         recursive(recursiveArr, i);
    //     }
    // }
    // debugger
    // if(nums.length > 1) {
    //     answer.push([]);
    //     answer.push(nums);
    //     for(let i = 0; i < nums.length; i++) {
    //         let arr = [];
    //         arr.push(nums[i]);
    //         answer.push(arr);
    //         recursive(arr, i);
    //     }
    // } else if(nums.length === 1){
    //     answer.push([]);
    //     answer.push(nums);
    // }
    // return answer;
})();