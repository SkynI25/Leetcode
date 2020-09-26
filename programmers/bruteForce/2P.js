// https://programmers.co.kr/learn/courses/30/lessons/42839
(function () {
    let numbers = "1234";
    let numbersArr = numbers.split("");
    let includes = numbersArr.map(num => !num);
    let answer = 0;
    const dataSet = new Set();
    const primeSet = new Set();
    const isPrime = num => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    
    const permutation = (k) => {
        if(k === numbersArr.length) {
            dataSet.add(numbersArr.join(""));
        }
        for(let i = k; i < numbersArr.length; i++) {
            swap(numbersArr, k, i);
            permutation(k+1);
            swap(numbersArr, k, i);
        }
    }

    const powerset = (k, arr) => {
        if(k === arr.length) {
            let temp = "";
            for(let i = 0; i < arr.length; i++) {
                if(includes[i]) {
                    temp += arr[i];
                }
            }
            return temp !== "" && primeSet.add(parseInt(temp));
        }
        includes[k] = false;
        powerset(k+1, arr);
        includes[k] = true;
        powerset(k+1, arr);
    }

    const swap = (data, k, n) => {
        let temp = data[k];
        data[k] = data[n];
        data[n] = temp;
    }

    permutation(0);
    for(let data of dataSet) {
        primeSet.add(parseInt(data));
        powerset(0, data);
    }
    console.log(primeSet);

    debugger
    [...primeSet].forEach((el) => {
        if(isPrime(el)) {
            answer++;
        }
    });

    console.log(answer);
    return answer;
})();