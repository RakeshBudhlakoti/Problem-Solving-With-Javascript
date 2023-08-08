// Implement a function that returns the Fibonacci sequence up to a given number of terms.


function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

const numberOfTerms = 10;
const fibonacciSequence = fibonacci(numberOfTerms);
console.log(fibonacciSequence);  // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
