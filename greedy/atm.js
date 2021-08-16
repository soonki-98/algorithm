const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

let N;
let count = 0;

rl.on("line", (line) => {
    if (!count) N = Number(line);
    else if (count === 1) {
        atm(line);
        rl.close();
    }
    count++;
});

function atm(input){
    let arr = input.split(' ').map((num) => parseInt(num));
    arr.sort((a, b) => {return a - b});
    let result = 0;
    for (let i = 1; i < N; i++) {
        arr[i] = arr[i - 1] + arr[i];   
        result += arr[i];
    }
    console.log(result + arr[0]);
}