
// 2)Add two numbers

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number 1:  " ,function(a) {
    r1.question("Enter number 2 : " , function(b){

        const sum = Number(a) + Number(b);
        console.log(sum);
        r1.close();
    })
})