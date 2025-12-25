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


// Convert object to array

const keys = Object.keys(student);   // ["name", "address"]
const values = Object.values(student); // ["Sandhya", {city: "Salem", state: "Tamil Nadu"}]
const entries = Object.entries(student); // [["name","Sandhya"], ["address",{...}]]
console.log(keys, values, entries);
