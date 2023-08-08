//Implement a function that calculates the sum of all integers in a nested array of numbers.

//This solution recursively traverses the nested array, adding up numeric elements encountered along the way.

function sumNestedArray(arr) {
    let total = 0;

    for (const element of arr) {
        if (Array.isArray(element)) {
            total += sumNestedArray(element);
        } else if (typeof element === 'number') {
            total += element;
        }
    }

    return total;
}

const nestedArray = [1, [2, [3, 4]], 5, [6]];
const result = sumNestedArray(nestedArray);
console.log(result);  // Outputs: 21 (1 + 2 + 3 + 4 + 5 + 6)
