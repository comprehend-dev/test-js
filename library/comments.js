/* This file tests lines of comments and significant lines of code.
 * So it has some interesting cases of those. */

// Rounds numbers to the nearest even number.
function toNearestEven(numbers) {
    for (let i = 0; i < numbers.length; i++) { // Iterate the numbers
        let num = numbers[i];

        if (num % 1) { /* The semantics we want are towards zero, which is
                        * opposite directions in different ways. */
            if (num < 0) {
                numbers[i] += 1;
            }
            else {
                numbers[i] -= 1;
            }
        }
    }
}
