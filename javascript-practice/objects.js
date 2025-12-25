const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

class Operation {

    addition(a,b)
    {
        return a + b;
    }

    subraction(a,b)
    {
        return a-b;
    }

}
r1.question("enter your choice Addition / subraction:",(choice) => {
r1.question("enter number 1 : ",(num1) => {

r1.question("enter number 2 : ",(num2) => {
num1 = Number(num1);
num2 = Number(num2);
    
    let op = new Operation(choice);
    let result;
   if(choice === "+")
   {
       result =  op.addition(num1,num2);
   }
   else{
    result = op.subraction(num1,num2);
   }
    console.log(result)
    r1.close();
})
})
})