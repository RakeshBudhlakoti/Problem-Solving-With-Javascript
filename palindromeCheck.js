// Create program for Palindrome

//A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.


const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome('table'));
console.log(isPalindrome('racecar'));