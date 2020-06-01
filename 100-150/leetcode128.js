let nums = [1,1];

(function () {
    nums = nums.sort((a,b) => a - b);
    if(nums.length === 0) {
        return 0;
    } else if(nums.length === 1) {
        return 1;
    } else {
        let len = 1;
        let maxLen = 0;
        for(let i = 0; i < nums.length-1; i++) {
            if(nums[i] !== nums[i+1]) {
                if(nums[i+1] === nums[i] + 1) {
                    len++;
                } else {
                    maxLen = maxLen < len ? len : maxLen;
                    len = 1;
                }
                
            }
        }
        console.log(maxLen < len ? len : maxLen);
        return maxLen < len ? len : maxLen;
    }
    /* first solution
    nums = nums.sort((a,b) => a - b);
    nums = [...new Set(nums)];
    if(nums.length === 0) {
        return 0;
    } else if(nums.length === 1) {
        return 1;
    } else {
        let len = 1;
        let maxLen = 0;
        for(let i = 0; i < nums.length-1; i++) {
            if(nums[i+1] === nums[i] + 1) {
                len++;
            } else {
                len = 1;
            }
            maxLen = maxLen < len ? len : maxLen;
        }
        console.log(maxLen);
    } */
})();