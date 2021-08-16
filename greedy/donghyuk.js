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
    let test = input[0];
    let list = input.slice(1); 
    change(test, list);
});

function change(test, list) {
    for (let i = 0; i < list.length; i++) {
        const quarter = Math.floor(list[i] / 25),               
            dime = Math.floor((list[i] - (quarter * 25)) / 10),        
            nickel = Math.floor((list[i] - (quarter * 25) - (dime * 10)) / 5),
            penny = list[i] % 5
            
        console.log(quarter, dime, nickel, penny);
    }    
}