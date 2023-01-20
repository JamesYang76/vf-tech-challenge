
import { fizzBuzz } from "../src/fizzBuzz";

test('fizzBuzz function with 12, 20 should return Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz', () => {
  expect(fizzBuzz(12, 20)).toBe("Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz");
});

test('fizzBuzz function with 1, 15 should return 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz', () => {
  expect(fizzBuzz(1, 15)).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
});
