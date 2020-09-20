// https://programmers.co.kr/learn/courses/30/lessons/42839
(function () {
    let numbers = "17";
    const isPrime = num => {
        if (num < 2) return false;
        if (num === 2) return true;
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num%i===0) return false;
            }
        return true;
    };
    
    const numSet = new Set();
    const permutation = (numArr, subStr) => {
        debugger
        numSet.add(Number(subStr));
        
        if (numArr.length > 0) {
            for (let i in numArr) {
                const temp = numArr.slice(0);
                temp.splice(i, 1);
                permutation(temp, subStr.concat(numArr[i]));
            }
        }
        return numSet;
    }
    
    const solution = numbers => {
        let answer = 0;
        const num = numbers.split("");
        
        const result = permutation(num, "")
        result.forEach((num) => {
            if(isPrime(num)){
                answer ++;
            }
        })
        return answer;
    }
    // function isPrime(number) {
    //     if(number < 2) {
    //         return false;
    //     }
    //     if(number === 2) {
    //         return true;
    //     }
    //     for(let i = 2; i <= Math.sqrt(number); i++) {
    //         if(number % i === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // const numSet = new Set();
    // function permutation(numArr, substr) {
    //     debugger
    //     numSet.add(Number(substr));

    //     if(numArr.length > 0) {
    //         numArr.forEach((num, i) => {
    //             permutation(numArr.slice(0).splice(i,1), substr.concat(numArr[i]));
    //         })
    //     }
    //     return numSet;
    // }

    // function solution(numbers) {
    //     let answer = 0;
        
    //     const result = permutation(numbers.split(""), "");
    //     result.forEach(num => {
    //         if(isPrime(num)) {
    //             answer++;
    //         }
    //     })
    //     return answer;
    // }

    solution(numbers);
})();