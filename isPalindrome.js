//Write a function that checks if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
        if (cleanStr[i] !== cleanStr[j]) {
            return false;
        }
    }

    return true;
}


const input1 = 'A man, a plan, a canal, Panama!';
const input2 = 'racecar';
const input3 = 'hello';

console.log(isPalindrome(input1));  // Outputs: true
console.log(isPalindrome(input2));  // Outputs: true
console.log(isPalindrome(input3));  // Outputs: false
