
let string = 'Enter a string';


function countVowel(str) { 

    let count = str.match(/[aeiou]/gi).length;
    return count;
}

let result = countVowel(string);
console.log(result);