function isPrime(number) {
    if (isNaN(number) || number <= 1) {
        return false;
    }

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5));