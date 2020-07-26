let height = [1,8,6,2,5,4,8,3,7];
(function() {
    debugger
    let i = 0;
    let j = height.length-1;
    let answer = 0;
    while(i < j && j - 1 >= 1) {
        let h = 0;
        if(height[i] > height[j]) {
            h = height[j];
            j--;
        } else {
            h = height[i];
            i++;
        }
        answer = Math.max(answer, h * (j - i + 1));
    }
    console.log(answer);
})();