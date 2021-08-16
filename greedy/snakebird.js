const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

let input = [];

rl.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    input[0] = input[0].split(" ").map(el => parseInt(el));
    input[1] = input[1].split(" ").map(el => parseInt(el)).sort((a, b) => {return a - b});
    snakebird(input)
})

function snakebird(input) {
    const n = input[0][0];
    let birdLen = input[0][1];

    for (let i = 0; i < n; i++) {
        (birdLen >= input[1][i]) ? birdLen++ : birdLen;
    }
    console.log(birdLen);
}