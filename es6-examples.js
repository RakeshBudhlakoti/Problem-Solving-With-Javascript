// =======================  ES6 ======================

//Here are some example JavaScript ES6 programs that demonstrate various concepts and features of the ES6 (ECMAScript 2015) syntax and language enhancements:

// Arrow Functions:

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


//Template Literals:

const name = 'Alice';
console.log(`Hello, ${name}!`); // Output: Hello, Alice!

// Destructuring Assignment:

const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const { firstName, age } = person;
console.log(`${firstName} is ${age} years old.`); // Output: John is 30 years old.

//  Spread and Rest Operators:

const numbersArr = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...numbersArr)); // Output: 15


// Classes and Inheritance:

class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // Output: Buddy barks.

  
// Map and Set:

  const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap.get('key1')); // Output: value1

const mySet = new Set([1, 2, 3, 2, 4]);
console.log([...mySet]); // Output: [1, 2, 3, 4]


//     Array Methods (forEach, map, filter):

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
