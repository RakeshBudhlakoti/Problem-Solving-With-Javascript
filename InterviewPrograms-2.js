//Question 6: Fibonacci Series
//Write a function that generates the Fibonacci series up to a given number of terms.


function fibonacciSeries(count) {
  const series = [0, 1];
  for (let i = 2; i < count; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

const numberOfTerms = 8;
const fibSeries = fibonacciSeries(numberOfTerms);
console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

//Question 7: Factorial Calculation
//Write a function to calculate the factorial of a given non-negative integer.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = 5;
const result = factorial(num);
console.log(result); // Output: 120

// Question 8: Array Manipulation - Rotate
// Write a function that rotates an array by a given number of positions.

function rotateArray(arr, positions) {
  const rotated = arr.slice(positions).concat(arr.slice(0, positions));
  return rotated;
}

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]

//Question 9: Check for Anagrams
//Write a function that checks whether two strings are anagrams of each other.


function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

const string1 = 'listen';
const string2 = 'silent';
const anagramCheck = areAnagrams(string1, string2);
console.log(anagramCheck); // Output: true

//Question 10: Object Manipulation
//Given an object, write a function to return an array containing the property names of the object.


function getPropertyNames(obj) {
  return Object.keys(obj);
}

const sampleObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const propertyNames = getPropertyNames(sampleObject);
console.log(propertyNames); // Output: ["name", "age", "city"]
