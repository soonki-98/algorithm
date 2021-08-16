const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];

rl.on("line", function (line) {
    input.push(line) 
}).on("close", function () { 
    input = input.map((el) => parseInt(el)); 
    let n = input[0];
    let list = input.slice(1); 
    rope(n, list);
});

function rope(n, list) {
    list.sort((a, b) => {return a - b;});
    let weight = 0;
    for (let i = 0; i < n; i++) {
        if (list[i] * (n - i) > weight) {
            weight = list[i] * (n - i); 
        }
    }
    console.log(weight);
}