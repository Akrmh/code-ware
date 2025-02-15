/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)*/

function persistence(num) {
    let count = 0;
    while (num >= 10) { // Repeat until num is a single digit
        num = num.toString() // Convert the number to a string
                  .split('')  // Split into an array of digits
                  .map(Number) // Convert each digit back to a number
                  .reduce((a, b) => a * b); // Multiply all digits together
        count++; // Increment the count of multiplications
    }
    return count;
}

// Examples
console.log(persistence(39));  // Output: 3
console.log(persistence(999)); // Output: 4
console.log(persistence(4));   // Output: 0
console.log(persistence(10));   // Output: 1

// function persistence(num) {
//     for (var i = 0; num > 9; i++) {
//       num = num.toString().split('').reduce((t, c) => c * t);
//     }
//     return i;
//  }