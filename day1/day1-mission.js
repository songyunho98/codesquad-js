function getArea(figure, a = 0, b = 0, c = 0) {
    if(figure === 'circle') return getCircleArea(a);
    if(figure === 'rect') return getRectArea(a,b);
    if(figure === 'trapezoid') return getTrapezoidArea(a, b, c);
}

// 원의 넓이
function getCircleArea(radius) {
    const cricleArea = radius*radius*Math.PI;
    return cricleArea;
}
// 사각형의 넓이
function getRectArea(width, height) {
    const rectArea = width * height;
    return rectArea;
}
// 사다리꼴의 넓이
function getTrapezoidArea(top, bottom, height) {
    const trapezoidArea = ((top + bottom) * height) / 2;
    return trapezoidArea;
}

// 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이


//> 원의 넓이 값출력
console.log(getArea('circle', 10));
//> 사각형의 넓이값출력
console.log(getArea('rect', 10, 15));
//> 사다리꼴의 넓이값출력
console.log(getArea('trapezoid', 10, 15, 12));
//> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력.
//console.log(getArea('circle', 1, n));
