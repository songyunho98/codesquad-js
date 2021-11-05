//첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

var a = parseInt(input[0]);

function solution () {
  let result = '';
  for(let i = 1; i <= a; i++) {
    result = result + '*'.repeat(i) + ' \n';
  }
  console.log(result);
}

solution();