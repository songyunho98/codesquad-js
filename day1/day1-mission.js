function getArea(figure) {
    if(figure === 'circle') {
        if(arguments.length === 2) {
            return getCircleArea(arguments[1]);
        } else {
             return getIncreaseCircleArea(arguments[1], arguments[2]);
        }
    }
    if(figure === 'rect') return getRectArea(arguments[1],arguments[2]);
    if(figure === 'trapezoid') return getTrapezoidArea(arguments[1], arguments[2], arguments[3]);
}
// 원의 넓이
function getCircleArea(radius) {
    const PI = Math.PI;
    const circleArea = radius * radius * PI;
    printexcutionSequence.push('circle');
    return circleArea;
}
// 사각형의 넓이
function getRectArea(width, height) {
    const rectArea = width * height;
    printexcutionSequence.push('rect');
    return rectArea;
}
// 사다리꼴의 넓이
function getTrapezoidArea(top, bottom, height) {
    const trapezoidArea = ((top + bottom) * height) / 2;
    printexcutionSequence.push('trapezoid');
    return trapezoidArea;
}
// 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이
function getIncreaseCircleArea(firstnumber, total) {
    const increaseNumber = firstnumber;
    let sum = 0;
    let tmp = firstnumber;
    while(tmp !== total) {
        sum += getArea('circle', tmp);
        tmp += increaseNumber;
    }
    printexcutionSequence.push('increaseCircle');
    return sum;
}

const printexcutionSequence = [];

function printExecutionSequence() {
    console.log("계산수행순서: ", printexcutionSequence);
    printexcutionSequence.length = 0;
}

//> 원의 넓이 값출력
console.log(getArea('circle', 10));
//> 사각형의 넓이값출력
console.log(getArea('rect', 10, 15));
//> 사다리꼴의 넓이값출력
console.log(getArea('trapezoid', 10, 15, 12));
//> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력.
console.log(getArea('circle', 1, 3));
printExecutionSequence();

getCircleArea() 
getCircleArea() 
getCircleArea('circle',2) 
getRectArea('rect',2,3) 
printExecutionSequence();

