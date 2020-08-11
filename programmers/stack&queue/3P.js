// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
let progresses = [93, 30, 55, 60, 40, 65];
//[40, 93, 30, 55, 60, 65];
let speeds = [1, 30, 5 , 10, 60, 7];
//[60, 1, 30, 5 , 10, 7];

(function () {
    let answer = [];
    debugger
    while(progresses.length > 0 && speeds.length > 0) {
        let workingDay = Math.ceil((100 - progresses[0]) / speeds[0]);
        let lastIndex = -1;
        let remainProgresses = speeds.map((speed, idx) => progresses[idx] += workingDay * speed);
        let prevProgress = 0;
        let completedFeature = remainProgresses.filter((progress, idx) => {
            if((idx === 0 || prevProgress >= 100) && progress >= 100) {
                lastIndex = idx;
                prevProgress = progress;
                return progress;
            }
            if(progress < 100) {
                prevProgress = progress;
            }
        }).length;
        completedFeature > 0 ? answer.push(completedFeature) : null;
        progresses = lastIndex > -1 ? progresses.filter((progress, idx) => idx > lastIndex) : progresses;
        speeds = lastIndex > -1 ? speeds.filter((speed, idx) => idx > lastIndex) : speeds;
    }
    console.log(answer);
    return answer;
})();