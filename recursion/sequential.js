(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let items = "abcdefghijklmnopqrstuvwxyz";

    function normalFun(arr, target) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                return i;
            }
        }
        return -1;
    }

    function recursionFun(arr, begin, target) {
        if(begin > arr.length) {
            return -1;
        } else if(arr[begin] === target) {
            return begin;
        } else {
            return recursionFun(arr, begin+1, target);
        }
    }

    function middleFun(arr, begin, end, target) {
        if(begin > arr.length) {
            return -1;
        } else {
            let middle = parseInt((begin+arr.length-1)/2);
            if(arr[middle] === target) {
                return middle;
            }
            let index = middleFun(arr, begin, middle-1, target);
            if(index !== -1) {
                return index;
            } else {
                return middleFun(arr, middle+1, end, target);
            }
        }
    }

    function findMax(arr, begin, end) {
        if(begin === end) {
            return arr[begin];
        } else {
            return Math.max(arr[begin], findMax(arr, begin+1, end));
        }
    }

    function findMax2(arr, begin, end) {
        if(begin === end) {
            return arr[begin];
        } else {
            let middle = parseInt((begin + end) / 2);
            let max1 = findMax2(arr, begin, middle);
            let max2 = findMax2(arr, middle+1, end);
            return Math.max(max1, max2);
        }
    }

    function binarySearch(items, target, begin, end) {
        if(begin > end) {
            return -1;
        } else {
            let middle = parseInt((begin + end) / 2);
            let compResult = target > items[middle] ? 1 : target < items[middle] ? -1 : 0;
            if(compResult === 0) {
                return middle;
            } else if(compResult > 0) {
                return binarySearch(items, target, middle+1, end);
            } else {
                return binarySearch(items, target, begin, middle-1);
            }
        }
    }

    console.log(normalFun(arr, 5));
    console.log(recursionFun(arr, 0, 5));
    console.log(middleFun(arr, 0, arr.length-1, 5));
    console.log(findMax(arr, 0, arr.length-1));
    console.log(findMax2(arr, 0, arr.length-1));
    console.log(binarySearch(items, "z", 0, items.length-1));
})();