// Create object using object literal
// Create object using constructor function
// Access object properties
// Add & delete object properties
// Iterate object using for…in
// Object with method
// Nested objects
// Object destructuring
// Convert object to array
// Clone an object


// Clone an object

// type 1 = a) Using Object.assign()


const person = { name: "Sandhya", age: 23 };

// Shallow clone
const clone1 = Object.assign({}, person);

clone1.name = "mythili";
console.log(person.name); // Sandhya (original not changed)
console.log(clone1.name); // mythili


// b) Using Spread Operator

const clone2 = { ...person };

clone2.age = 30;
console.log(person.age); // 23
console.log(clone2.age); // 30


// Shallow copy: Only copies top-level properties.

// If object has nested objects, the nested object is still shared between original and clone.

const student = { name: "Sandhya", address: { city: "Salem" } };
const cloneStudent = { ...student };

cloneStudent.address.city = "Chennai";
console.log(student.address.city); // Chennai (nested object shared!)


// Deep clone: To fully clone nested objects, you can use:

const deepClone = JSON.parse(JSON.stringify(student));
deepClone.address.city = "Chennai";
console.log(student.address.city); // Salem (original untouched)


// Be careful: JSON.stringify cannot handle functions, undefined, or special objects like Date.


