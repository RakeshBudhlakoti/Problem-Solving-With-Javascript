const str = 'Hello World';

function reverseString(str) {
   return str.split('').reverse().join('');
}

console.log(`Reversed string is: ${reverseString(str)}`);