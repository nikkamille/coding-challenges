// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

// If i is a multiple of both 3 and 5, print FizzBuzz.
// If i is a multiple of 3 (but not 5), print Fizz.
// If i is a multiple of 5 (but not 3), print Buzz.
// If i is not a multiple of 3 or 5, print the value of i.

// Example:

// fizzBuzz(15)

// 1     
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz


function fizzBuzz(n) {
    
    for (let i = 1; i <= n; i++) {              // Iterate and print the numbers from 1 to n.
        if (i % 3 === 0 && i % 5 === 0) {       // Check if each number is divisible by 3 && 5; print FizzBuzz.
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {               // Write another conditional - check if the number is divisible by 3 || 5; print Fizz || Buzz.
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {                                // Write an else statement that if the number is not divisible by 3 or 5, it will print the actual number.
            console.log(i)
        }
    }
}

fizzBuzz(15)