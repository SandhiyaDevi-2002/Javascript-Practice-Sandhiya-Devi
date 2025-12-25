// Swap two numbers (with temp / without temp)



const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number :  " ,function(a) {
    r1.question("Enter number :  " ,function(b) {
        a = Number(a);
        b = Number(b);
        a = a + b; //5 + 3 = 8
        b = a - b; // 8 - 3 = 5 
        a = a - b; // 8 - 5 = 3 
        console.log("after swap a value is : " + a);
        console.log("after swap b value is : " + b);

        r1.close();
    })
})
