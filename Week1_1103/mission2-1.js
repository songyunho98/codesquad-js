//1번 factorial함수
function calculate_solution1(value) {
    let resultArray = [];
    let num = 1;
    let currentValue = 1;

    while(num <= value) {
        currentValue *= num;
        resultArray.push(currentValue);
        num++;
    }

    return resultArray;
}

console.log(calculate_solution1(4));