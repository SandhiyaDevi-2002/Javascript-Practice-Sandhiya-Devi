// Reverse a number

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter a Number to Reverse : " , function(a) {

    a = Number(a);
    let rev = 0;
    while(a > 0)
    {
       let  digit = a % 10;
        rev = rev * 10 + digit ;
        a = Math.floor(a / 10);
    }
    console.log(rev);
    r1.close();
    
})