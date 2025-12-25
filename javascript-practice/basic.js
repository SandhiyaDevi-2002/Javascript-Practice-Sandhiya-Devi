// let a = 10;
// let b = 20;

// console.log(a+b)
// console.log("welcome to js learning")

// function greet(){
//     return "hello this is sandhya learning javascript";
// }

// result = greet()
// console.log(result)

// console.log(xy)
// var xy = 5;

// for(var i =0;i<3;i++)
// {
//     console.log(i)
// }


// function test(){
//     if(test)
//     {
//         let x = 10;
//        console.log(x)

//     }

// }


// test();
// console.log(x)


// console.log((typeof("hello")));
// console.log(typeof null);



// let num = 100;
// console.log(typeof(String(num)))

// let num = 7;
// if(num %2 === 0)
// {
//     console.log("even");
    
// }
// else{
//     console.log("odd");
    
// }

// let a= 10 , b = 20;
// console.log(a>b?a:b);


// let num = 7;
// let isPrime = true;

// if(num <= 1)
//     isPrime = false;
// for(let i =0;i<Math.sqrt(num);i++)
// {
//     if(num%i === 0)
//     {
//         isPrime = false;
//         break;
//     }
// }

// console.log(isPrime ? "Prime" : "Not Prime");


// let a = 10 , b = 30;

// a = a + b; //10 + 30 = 40
// b = a - b ;// 40 - 30 = 10 
// a = a - b; // 40 - 10 = 30

// console.log(a);
// console.log(b);

// let num  = 5;
// let sum =1;
// for(let i =1;i<=num;i++)
// {
//   sum = sum *i;
  
// }
// console.log(sum);


// let a = 0, b = 1;

// let n = 10;
// let c =0;
    
//     console.log(a);
//     console.log(b);
// for(let i = 0;i<=n;i++)
// {
//      c = a + b;
//     console.log(c);

//     a = b ;
//     b = c;
// }


//readline module
const readline = require("readline");// require() → imports Node.js built-in module
const r1 = readline.createInterface({ //readline → helps read input line-by-line from terminal
    input:process.stdin,
    output:process.stdout
});

r1.question("enter your marks:",(marks) => {
    // console.log(`enter marks  ${marks}`);
    // r1.close();
    marks = Number(marks);
      if(marks >= 90)
    {
        console.log("Grade A");
        
    }
    else if(marks>= 80 && marks <= 90 )
    {
        console.log("Grade B");
        
    }
    else{
        console.log("Grade C");
        
    }
    r1.close();
})


// process.stdin.on("data", (data) => {
//     console.log(`enter marks ${data}`);
//      const marks = Number(data);
//     if(marks >= 90)
//     {
//         console.log("Grade A");
        
//     }
//     else if(marks>= 80 && marks <= 90 )
//     {
//         console.log("Grade B");
        
//     }
//     else{
//         console.log("Grade C");
        
//     }
//     process.exit();
// });



