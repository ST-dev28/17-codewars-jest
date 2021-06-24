/*
Write a function called findUnique which returns the only unique number from an array.
All numbers in the unsorted array are present twice, except the one you have to find. 
The numbers are always valid integer values between 1 and 2147483647, so no need for 
type and error checking. The array contains at least one number and may contain 
millions of numbers. So make sure your solution is optimized for speed.
Example:
Input: [ 1, 8, 4, 4, 6, 1, 8 ]
Expected output: 6
*/

function findUnique(numbers) {
    return numbers.reduce((a, b) => a ^ b);
}


it("test", () => {
    expect(findUnique([1, 8, 4, 4, 6, 1, 8])).toBe(6);
    expect(findUnique([1234567])).toBe(1234567);
    expect(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])).toBe(1);
    expect(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])).toBe(4);
    expect(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])).toBe(9);
});