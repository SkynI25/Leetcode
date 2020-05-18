let heights = [2,1,5,6,2,3];

(function () {
    let answer = 0;
    if(heights.length === 0) {
        return answer;
    }
    let lessFromLeft = new Array(heights.length);
    let lessFromRight = new Array(heights.length);
    lessFromRight[lessFromRight.length-1] = heights.length;
    lessFromLeft[0] = -1;

    for(let i = 1; i < heights.length; i++) {
        let p = i - 1;
        while(p >= 0 && heights[p] >= heights[i]) {
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }
    for(let i = heights.length-2; i >= 0; i--) {
        let p = i + 1;
        while(p < heights.length && heights[p] >= heights[i]) {
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }

    for(let i = 0; i < heights.length; i++) {
        answer = Math.max(answer, heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
    }
    console.log(answer);
    return answer;
})();