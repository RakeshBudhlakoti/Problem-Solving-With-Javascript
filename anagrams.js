//Write a function that determines if a given string is an anagram of another string (contains the same characters, but possibly in a different order).

function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false; // Anagrams must have the same length
    }

    const charCount = {};

    for (const char of cleanStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of cleanStr2) {
        if (!charCount[char]) {
            return false; // Character not present in str1
        }
        charCount[char]--;
    }

    return true;
}

const input1 = 'listen';
const input2 = 'silent';
const input3 = 'hello';

console.log(areAnagrams(input1, input2));  // Outputs: true
console.log(areAnagrams(input1, input3));  // Outputs: false
