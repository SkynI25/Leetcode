let nums1 = [6,5,4,3,0,0];
let m = 4;
let nums2 = [2,1];
let n = 2;


// [-1,-1,0,0,0,0]
// 4
// [-1,0]
// 2
(function () {
    function mergeSort(arr, helper, low, high) {
        if(low < high) {
            let middle = parseInt((low + high) / 2);
            mergeSort(arr, helper, low, middle);
            mergeSort(arr, helper, middle+1, high);
            merge(arr, helper, low, middle, high);
        }
    }

    function merge(arr, helper, low, middle, high) {
        for(let i = low; i <= high; i++) {
            helper[i] = arr[i];
        }

        let helperLeft = low;
        let helperRight = middle + 1;
        let current = low;

        while(helperLeft <= middle && helperRight <= high) {
            if(helper[helperLeft] <= helper[helperRight]) {
                arr[current] = helper[helperLeft];
                helperLeft++;
            } else {
                arr[current] = helper[helperRight];
                helperRight++;
            }
            current++;
        }
        let remaining = middle - helperLeft;
        for(let i = 0; i <= remaining; i++) {
            arr[current + i] = helper[helperLeft + i];
        }
    }
    if(n !== 0) {
        nums2 = nums2.filter((el, i) => i < n);
        nums1.splice(m, n, ...nums2);

        let helper = new Array(nums1.length);
        debugger
        mergeSort(nums1, helper, 0, nums1.length-1);
    
        // for(let i = 0; i < m+n-1; i++) {
        //     for(let j = 0; j < m+n-1; j++) {
        //         if(nums1[j] > nums1[j+1]) {
        //             let temp = nums1[j];
        //             nums1[j] = nums1[j+1];
        //             nums1[j+1] = temp;
        //         }
        //     }
        // }
    }

    console.log(nums1);
})();