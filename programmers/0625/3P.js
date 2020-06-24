let n = 10;
let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
//["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];
//["hello", "one", "even", "never", "now", "world", "draw"];
//["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

(function () {
    let answer = [0,0];
    let wordSet = new Set();
    let i = 0;
    if(words.length === 0) {
        return answer;
    }
    debugger
    let nextWord = "";
    let currentWord = "";
    let nextFChar = "";
    let currentLChar = "";

    while(i < words.length-1) {
        currentWord = words[i];
        nextWord = words[i+1];
        currentLChar = currentWord[currentWord.length-1];
        nextFChar = nextWord[0];
        wordSet.add(currentWord);
        if(currentLChar !== nextFChar || wordSet.has(nextWord)) {
            let saram = (i+1) % n;
            let loop = saram === 0 ? Math.ceil((i+1)/n) + 1 : Math.ceil((i+1)/n);
            answer = [saram+1, loop];
            break;
        }
        i++;
    }
    console.log(answer);
})();