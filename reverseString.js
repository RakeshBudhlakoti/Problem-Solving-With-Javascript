//Write a function that reverses a string without using any built-in reverse functions.

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

const input = 'Hello, world!';
const reversedInput = reverseString(input);
console.log(reversedInput);  // Outputs: "!dlrow ,olleH"
