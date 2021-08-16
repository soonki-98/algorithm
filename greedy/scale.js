const { setupMaster } = require('cluster');

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
    let arr = input.split(' ').map((num) => parseInt(num)).sort((a, b) => {return a - b});
    const sum = arr.reduce((a, b) => a + b, 0);
    const compare = [1, ...sum];
    console.log(compare);
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; i < arr.length; j++) {
    //         let temp = 0;
    //         temp += arr[i][j];

    //     }
    // }
}