//Write a function that takes an array of numbers as input and returns the second smallest number.

function secondSmallest(arr) {
    if (arr.length < 2) {
        return undefined; // Not enough elements in the array
    }

    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
}

const numbers = [7, 2, 9, 1, 5, 10];
const result = secondSmallest(numbers);
console.log(result);  // Outputs: 2
