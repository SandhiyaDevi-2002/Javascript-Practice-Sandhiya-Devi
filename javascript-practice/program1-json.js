//convert json to javascript object 

// const jsonstr = '{"name" : "sandhya" , "age" : 23}';

// const obj = JSON.parse(jsonstr);
// console.log(obj.name);
// console.log(obj.age);

//convert javascript object to json format

// const user1 = {
//     name : "sandhya",
//     age : 23
// };

// const json1 = JSON.stringify(user1);
// console.log(json1);


const user = {name : "sandhya" , age : 23 , city : "salem", skills : ["js" , "css"]};
const json = JSON.stringify(user);

console.log(json);
const parsed = JSON.parse(json);
console.log(parsed.name);
console.log(parsed.skills[1]);
