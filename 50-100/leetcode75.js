let nums = [2,0,2,1,1,0];

(function () {
    if(nums ==null || nums.length<2) return;
       let low = 0; 
       let high = nums.length-1;
       for(let i = low; i<=high;) {
           if(nums[i]==0) {
              // swap A[i] and A[low] and i,low both ++
              let temp = nums[i];
              nums[i] = nums[low];
              nums[low]=temp;
              i++;low++;
           }else if(nums[i]==2) {
               //swap A[i] and A[high] and high--;
              let temp = nums[i];
              nums[i] = nums[high];
              nums[high]=temp;
              high--;
           }else {
               i++;
           }
       }
    // let map = new Map();
    // map.set('0', 0).set('1', 0).set('2', 0);
    // nums.forEach(el => {
    //     let num = map.get(el+'');
    //     map.set(el+'', num+1);
    // });
    // nums = new Array(nums.length);
    // let idx = 0;
    // [...map].forEach(el => {
    //     nums.fill(Number(el[0]), idx, idx+el[1]);
    //     idx += el[1];
    // });
    console.log(nums);
})();