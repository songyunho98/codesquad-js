//5번 배열 결과 출력

const json_tree = require('./json_tree.js');

let array = [];

function findType(data) {
    for (let i in data) {
        if (data[i].type === "sk")
            array.push(data[i].name);
        if (data[i].childnode.length !== 0)
            findType(data[i].childnode);
    }
}

findType(json_tree.data)
console.log(array);