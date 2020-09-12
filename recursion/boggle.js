let input = [
"1",
"URLPM",
"XPRET",
"GIAET",
"XTNZY",
"XOQRS",
"6",
"PRETTY",
"GIRL",
"REPEAT",
"KARA",
"PANDORA",
"GIAZAPX",
];
require('readline')
.createInterface(process.stdin, {})
.on('line', function(line) {
  input.push(line.trim());
}).on('close', function() {
    let testCase = [];
    let tempIdx = 0;
  for (let i = 0; i < input.length; i++) {
      if(isNaN(parseInt(input[i]))) {
          testCase.push(input[i]);
      } else if(i !== 0 && !isNaN(parseInt(input[i]))) {
          tempIdx = i;
          break;
      }
  }
  let inputArr = input.splice(tempIdx+1, input.length);
  console.log(testCase, inputArr)
});