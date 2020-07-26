let nums = [-1, 0, 1, 2, -1, -4];

(function() {
    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let j = i+1;
        while(tmp.length < 3 && j < nums.length) {
            let idx = nums.indexOf(value - nums[j], j+1);
            if(idx > -1) {
                tmp.push([nums[i], nums[j], nums[idx]]);
            }
            j++;
        }
    }
})();