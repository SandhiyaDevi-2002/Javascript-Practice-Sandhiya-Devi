// Find factorial of a number


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter a Number to find factorial : " , function(a) {
    a = Number(a);
    let fact = 1;
    for(let i =1 ;i<=a;i++)
    {
        fact = fact * i;

    }
    console.log(fact);
    r1.close();
});

