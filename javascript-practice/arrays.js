// let fruits = ["apple","banana","mango"];

// fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("berry");
// fruits.shift();


// for(fruit of fruits)
// {
//     console.log(fruit);
// }


// fruits.forEach(fruit=>console.log(fruit));


// for(let i =0;i<=fruits.length-1;i++)
// {
//     console.log(fruits[i])
// }

// For Each Loop 

let nums = [10 , 20 , 60];

// nums.forEach(n => {
//     console.log(n * 2);
// })


// map function 

// let doubled = nums.map(n => n * 2);
// console.log(doubled);


//filter
// let even = nums.filter(n => n % 2   === 0);
// console.log(even);
// let total=0;


// let result = nums.filter(n => n > 30);
// console.log(result);
 
// let sum = nums.reduce((total , n) => total + n, 0);
// console.log(sum);



// normal function 
// function add(a,b)
// {
//     return a + b;

// }

// let sum = add(10,40);
// console.log(sum);


// arrow function
// let a = 10 , b= 40;
// const sum = (a,b) => {
//     return a + b;
// }
// console.log(sum(a,b));


// const add = (a,b) => a+b;
// console.log(add(80,10));

// without arguments 

// const greetrst = () => console.log("hello");

// greetrst();


//single parameter

// const sqr = x => x *x;
// console.log(sqr(2));

//multiple parameter

// const mul = (a,b) => a *b;
// console.log(mul(2,5));

// let num = [3,8,12,5,7];
// let find = num.find(n => n>6); // it will return the first matched value but in filter we are iterating the whole array and returned the condition  matched with that array.
// console.log(find);

//some function which will return boolena value
// check if one person is under adult 

// const hasminor = nums.some(n => n < 18);
// console.log(hasminor);


//check if all are adults , the values in array all should match then only it will result true , if any one values doesnt satisfy the condition then it will return false 

// let Age = [23,32,18];
// const allAdults = Age.every(a => a >= 18);
// console.log(allAdults);


// const students = [{name : "asha" , marks : 90},
//                  {name : "meena", marks : 98},
//                  {name : "ravi" , marks : 32}];

// let topper = students.filter(student => student.marks > 80).map(student => student.name);
// console.log(topper);


