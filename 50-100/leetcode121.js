let prices = [7,6,5,4,3,1,2];

(function () {
    let minVal = Infinity;
    let maxVal = 0;
    let answer = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minVal) {
            minVal = prices[i];
        } else if(prices[i] - minVal > maxVal) {
            maxVal = prices[i] - minVal;
        }
    }
    // for(let i = 0; i < prices.length; i++) {
    //     minVal = prices[i];
    //     for(let j = i+1; j < prices.length; j++) {
    //         maxVal = prices[j];
    //         if(maxVal > minVal && maxVal-minVal > answer) {
    //             answer = maxVal - minVal;
    //         }
    //     }
    // }
    console.log(maxVal);
})();