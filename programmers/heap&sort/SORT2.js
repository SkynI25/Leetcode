let numbers = [0,0,0];

(function () {
    let answer = numbers.sort((a,b) => (b+''+a+'')-(a+''+b+'')).join("");
    return answer[0] === "0" ? "0" : answer;
})();