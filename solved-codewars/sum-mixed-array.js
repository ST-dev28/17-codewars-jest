/*
Given an array of integers as strings and numbers, return the sum of 
the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
    return Number(x.reduce((a, b) => Number(a) + Number(b)));
}


test("Testing for fixed tests", () => {
    test(sumMix([9, 3, '7', '3'])).toBe(22);
    test(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42);
    test(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(41);
})