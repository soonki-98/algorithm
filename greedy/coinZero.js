const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    input[0] = input[0].split(' ').map(el => parseInt(el));
    let list = input.slice(1);
    list = list.map(el => parseInt(el));
    let n = input[0];
    coinZero(n, list);
});

function coinZero(n, list) {
    let temp = 0;

    for (let i = n[0] - 1; i >= 0; i--) {
        if (n[1] < list[i]) continue;
        temp += Math.floor(n[1] / list[i]);
        n[1] = n[1] - (Math.floor(n[1] / list[i]) * list[i]);
    }
    console.log(temp);
}