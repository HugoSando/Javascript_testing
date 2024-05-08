import { describe, test, it, expect } from "vitest";
import { sum, subs, mult, div, OddEven, fizzBuzz, max, factorial } from "../src/intro";

describe('sum', () => {
    it('should return the sum', () => {
        expect(sum(5,6)).toBe(11)
    })
})

describe('subs', () => {
    it('should return the substraction', () => {
        expect(subs(5,6)).toBe(-1)
    })
})

describe('mult', () => {
    it('should return the multiplication', () => {
        expect(mult(5,6)).toBe(30)
    })
})

describe('div', () => {
    it('should return the divition', () => {
        expect(div(15,3)).toBe(5)
    })
})

describe('OddEven', () => {
    it('should return odd with number 5', () => {
        expect(OddEven(5)).toBe("Odd")
    })
    it('should return Even with number 6', () => {
        expect(OddEven(6)).toBe("Even")
    })
})

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // Arrange
        const a = 2;
        const b = 1;

        // Act
        const result = max(a, b);

        // Assert
        expect(result).toBe(2)
    })

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    it('should return the first argument if arguments are equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('should return Fizz if it is divisible by 3', () => {
        expect(fizzBuzz(6)).toBe("Fizz")
        expect(fizzBuzz(3)).toBe("Fizz")
    })

    it('should return Buzz if it is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz")
        expect(fizzBuzz(10)).toBe("Buzz")
    })

    it('should return FizzBuzz if it is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
        expect(fizzBuzz(30)).toBe("FizzBuzz")
    })
    
    it('should return the number if it is not divisible by 3 and 5', () => {
        expect(fizzBuzz(4)).toBe("4")
        expect(fizzBuzz(17)).toBe("17")
    })
})

describe('factorial', () => {
    it('should return factorial of 0', () => {
        expect(factorial(0)).toBe(1)
    })
    it('should return factorial of 1', () => {
        expect(factorial(1)).toBe(1)
    })
    it('should return factorial of 2', () => {
        expect(factorial(2)).toBe(2)
    })
    it('should return factorial of 7', () => {
        expect(factorial(7)).toBe(5040)
    })
})