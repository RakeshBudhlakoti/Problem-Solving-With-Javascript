//Implement a function that removes duplicates from an array and returns a new array with unique values.

function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (const element of arr) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

const array = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(array);
console.log(result);  // Outputs: [1, 2, 3, 4, 5]
