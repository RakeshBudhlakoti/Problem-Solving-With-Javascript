const num = 3849;

function reverseNumber(num) {
   return num.toString().split('').reverse().join('') * 1;
}

console.log(`Reversed integer is: ${reverseNumber(num)}`);