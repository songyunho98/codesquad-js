const scoreData = [89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 
        84.25, 67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01
];

//평균
function getMean(array) {
    const average =  array.reduce((a, b) => a + b) / array.length;
    return average;
}

//표준 편차
function getStandardDeviation(array) {
    
}

console.log("평균 : " + getMean(scoreData)); 
console.log("표준편차 : " + getStandardDeviation(scoreData));

