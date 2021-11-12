//6번 reduce만들기
const arr = [1, 2, 3, 4, 5];
const myReduce = (arr, callback, initialValue) => {
    
    let result = initialValue;
    for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}
const sum = (next, prev) => next + prev;

//test
const sumAnswer = myReduce(arr, sum, 0);
console.log(sumAnswer);
