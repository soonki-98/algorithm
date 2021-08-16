const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    input = input.map(el => parseInt(el));
    let n = input[0];
    let list = input.slice(1);
    sale(n, list);
});

function sale(n, list) {
    list.sort((a, b) => {return b - a});
    let temp = 0;
    for (let i = 1; i < Math.ceil(n / 3) + 1; i++){
        list[i] = list.slice(3 * (i - 1), i * 3);
        if(list[i].length < 3) {
            while (list[i].length < 3) {
                list[i].push(0);
            }
        }
        temp += (list[i][0] + list[i][1]);
    }
    console.log(temp);
}