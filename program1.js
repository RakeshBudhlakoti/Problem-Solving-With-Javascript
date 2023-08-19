// Prove that Array is also an Object in JavaScript for that we have 2 options: typeof and isArray
// Method -1 explain
let arr = [];
console.log(typeof arr);

// Method -2
let arr2 = [];
if (Array.isArray(arr2)) {
   console.log(`Array is an Object in JavaScript`);
}