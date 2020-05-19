let nums1 = [-1,-1,0,0,0,0];
let m = 4;
let nums2 = [-1,0];
let n = 2;


// [-1,-1,0,0,0,0]
// 4
// [-1,0]
// 2
(function () {
    if(n !== 0) {
        nums2 = nums2.filter((el, i) => i < n);
        nums1.splice(m, n, ...nums2);
    
        for(let i = 0; i < m+n-1; i++) {
            for(let j = 0; j < m+n-1; j++) {
                if(nums1[j] > nums1[j+1]) {
                    let temp = nums1[j];
                    nums1[j] = nums1[j+1];
                    nums1[j+1] = temp;
                }
            }
        }
    }

    console.log(nums1);
})();