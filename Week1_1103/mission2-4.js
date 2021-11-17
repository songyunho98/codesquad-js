//4번 배열 만들기

const o = require('./o.js');

let array = [];

for(let object in o.data) {
    for(let key in o.data[object]) {
        if (typeof o.data[object][key] === 'number')
            array.push(key);
    }       
}
console.log(array);