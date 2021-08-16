const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (price) => {
    price = parseInt(price);
    change(price);
    rl.close();
}).on('close', () => {
    process.exit();
});

function change(price) {
    const rest = 1000 - price,                 // 잔돈
        fiveH = Math.floor(rest / 500),         // 500엔
        oneH = Math.floor(rest % 500 / 100),    // 100엔
        fifty = Math.floor(rest % 100 / 50),    // 50엔
        ten = Math.floor(rest % 50 / 10),       // 10엔
        five = Math.floor(rest % 10 / 5),       // 5엔
        one = Math.floor(rest % 5);             // 1엔
        
    if (rest >= 500) {      
        console.log(fiveH + oneH + fifty + ten + five + one);
    }
    else if (rest >= 100) {     
        console.log(oneH + fifty + ten + five + one);
    }
    else if (rest >= 50) {      
        console.log(fifty + ten + five + one);
    }
    else if (rest >= 10) {      
        console.log(ten + five + one);
    }
    else if (rest >= 5) {       
        console.log(five + one);
    }
    else console.log(one); 
};