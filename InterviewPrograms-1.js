//Question 1: Reverse a String
//Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  return str.split('').reverse().join('');
}

const inputString = 'hello';
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "olleh"

//Question 2: Find the Largest Number in an Array
// Write a function that takes an array of numbers as input and returns the largest number.


function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

const numberArray = [3, 9, 1, 7, 5];
const largestNumber = findLargestNumber(numberArray);
console.log(largestNumber); // Output: 9

//Question 3: Check for Palindrome
//Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).


function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const testString = 'racecar';
const isPalindromic = isPalindrome(testString);
console.log(isPalindromic); // Output: true

//Question 4: FizzBuzz
//Write a program that prints the numbers from 1 to 10. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Question 5: Find Duplicate Elements
//Write a function that finds and returns any duplicate elements in an array.


function findDuplicates(arr) {
  const duplicates = [];
  const seen = {};

  for (const num of arr) {
    if (seen[num]) {
      duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }

  return duplicates;
}

const numbers = [1, 2, 3, 2, 4, 5, 4, 6];
const duplicateNumbers = findDuplicates(numbers);
console.log(duplicateNumbers); // Output: [2, 4]
