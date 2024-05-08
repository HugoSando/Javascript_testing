// Sum
export function sum(a, b) {
    return (a + b);
}

// Substraction
export function subs(a, b) {
    return (a - b);
}

// Multiplication
export function mult(a, b) {
    return (a * b);
}

// Divition
export function div(a, b) {
    return (a / b);
}

// odd or even
export function OddEven(n) {
    return (n%2 === 0) ? "Even" : "Odd";
}

// Max number
export function max(a, b) {
    return (a > b) ? a : b;
}

// FizzBuzz
export function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n.toString();
}

// Factorial
export function factorial(n) {
    let factorial = 1;
    for (let i = n; i > 1; i--) {
        factorial = factorial * i; 
    }
    return factorial;
}