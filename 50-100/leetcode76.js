let s = "ADODEABCA";
let t = "AABC";

(function() {
    debugger
    let ans = [-1, 0, 0];
    if(s.length === 0 || t.length === 0) {
        return "";
    }
    
    let dictMap = new Map();
    t.split("").forEach(el => {
        let num = dictMap.get(el) ? dictMap.get(el) : 0;
        dictMap.set(el, num+1);
    });

    let r = 0;
    let l = 0;
    let required = dictMap.size;
    let form = 0;

    let windowMap = new Map();

    while(r < s.length) {
        let char = s[r];
        let count = windowMap.get(char) ? windowMap.get(char) : 0;
        windowMap.set(char, count+1);

        if(dictMap.has(char) && windowMap.get(char) === dictMap.get(char)) {
            form++;
        }

        while(l <= r && required === form) {
            char = s[l];
            if(ans[0] === -1 || ans[0] > r - l + 1) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            let count = windowMap.get(char);
            windowMap.set(char, count-1);
            if(dictMap.has(char) && windowMap.get(char) < dictMap.get(char)) {
                form--;
            }
            l++;
        }
        r++;
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2]+1);
})();

/* first solution 
(function () {
    function check(tArr, s) {
        return tArr.every(el => new RegExp(el).test(s));
    }

    function mapInit(onOffMap, exKey) {
        for(let key of onOffMap.keys()) {
            if(key !== exKey && !(key instanceof Array)) {
                onOffMap.set(key, false);
            } else if(key !== exKey && key instanceof Array) {
                let arr = onOffMap.get(key);
                onOffMap.set(key, arr.map(el => !el));
            } else if(key === exKey && key instanceof Array) {
                let check = false;
                let arr = onOffMap.get(key);
                arr.forEach(el => {
                    if(el && !check) {
                        check = true;
                    } else {
                        el = false;
                    }
                });
                onOffMap.set(key, arr);
            }
        }
        return onOffMap;
    }
    let sArr = s.split("");
    let tArr = t.split("");

    let tMap = new Map();
    tArr.forEach(el => {
        if(tMap.has(el)) {
            let num = tMap.get(el);
            tMap.set(el, num+1);
        } else {
            tMap.set(el, 0);
        }
    });

    let onOffMap = new Map();
    for(let map of tMap) {
        if(map[1] >= 1) {
            onOffMap.set(map[0], new Array(map[1]+1).fill(false));
            tMap.set(map[0], 0);
        } else {
            onOffMap.set(map[0], false);
        }
    }

    sArr.forEach(el => {
        if(tMap.has(el)) {
            let num = tMap.get(el);
            tMap.set(el, num+1);
        }
    });

    let answer = "";
    let minSize = Infinity;
    let idx = 0;
    let prevIdx = 0;
    let newS = s;
    if(check(tArr, newS)) {
        debugger
        sArr.forEach(el => {
            let char = onOffMap.has(el) ? el : "";
            if(char !== "") {
                let obj = newS.match(new RegExp(char));
                if(onOffMap.has(obj[0])) {
                    if([...onOffMap].every(el => {
                        return el[1] instanceof Array ? el[1].every(el2 => !el2) : !el[1];
                    })) {
                        prevIdx = obj.index;
                    }
                    if(onOffMap.get(obj[0]) instanceof Array) {
                        let arr = onOffMap.get(obj[0]);
                        let btn = false;
                        arr.forEach((el,i) => {
                            if(!btn && !el) {
                                arr[i] = true;
                                btn = true;
                            }
                        });
                    } else {
                        onOffMap.set(obj[0], true);
                    }
                    idx = obj.index + 1;
                    if([...onOffMap].every(el => el[1])) {
                        if(newS.slice(prevIdx, idx).length < minSize) {
                            answer = newS.slice(prevIdx, idx);
                            minSize = newS.slice(prevIdx, idx).length;
                        }
                        let lengthCheck = typeof onOffMap.get(obj[0]) === 'boolean' ? 1 : onOffMap.get(obj[0]).length;
                        if(tMap.get(obj[0]) - lengthCheck !== 1) {
                            newS = newS.slice(idx);
                            onOffMap = mapInit(onOffMap);
                        } else {
                            newS = newS.slice(idx-1);
                            onOffMap = mapInit(onOffMap, obj[0]);
                        }
                    }
                }
            }
        });
    } else {
        return answer;    
    }
    return answer;
})(); */