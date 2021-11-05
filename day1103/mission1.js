// 문제 1번 n: 진법, t: t개의 숫자, m: m명
function solution1(n, t, m) {
    let answer = '';
    let input = 0;

    for(let i = 0; i < t * m; i++) {
        input = i.toString(n);
        answer += input;
    }
    return answer.split('');
}

console.log(solution1(2, 4, 2));


function solution3(n, t, m, p) {
    var answer = '';
    var every = [];

    for(var i = 0; i < t * m; i++){
        every.push(i.toString(n)) //진법변환
    }
    //다 이어서 문자열로 만들기
    var add = every.join("");

    // 말해야 하는 숫자 출력하기
    for(var j=0; j<t*m; j++){
        if(j % m === p - 1){ //*** 몇번째인지 조건 구하기
            answer = answer + add[j].toUpperCase();
        }
    }
    return answer;
}

console.log(solution3(16, 16, 2, 2));


