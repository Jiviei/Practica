const a: number = 1.625;
const b: number = 1.625;
const r: number = 0.875;

import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('x1: ', (x) => {
    rl.question('y1: ', (y) => {
        if (Math.pow((parseFloat(x) - a), 2) + Math.pow((parseFloat(y) - b), 2) <= Math.pow(r, 2))        
            console.log('true');
        else 
            console.log('false');
        rl.close();
    });
});
