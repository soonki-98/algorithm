const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    line = parseInt(line);
	microWave(line);
	rl.close();
}).on("close", function() {
	process.exit();
});

function microWave(line) {
    if (line >= 300) {
        if ( line % 10 === 0) {
            console.log ( Math.floor(line / 300), 
                          Math.floor((line % 300) / 60), 
                          (line % 60) / 10);
        } else console.log (-1);
    }
    else if (line >= 60) {
        if ((line % 10) === 0) {
            console.log (0, 
                         Math.floor(line / 60), 
                         (line % 60) / 10);
        } else console.log (-1);
    }
    else if (line >= 10) {
        if ((line % 10) === 0) {
            console.log(0, 0, line / 10);
        } else console.log (-1);
    }
    if (line < 10) console.log(-1);
}