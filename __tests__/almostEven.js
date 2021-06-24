/*
We need the ability to divide an unknown integer into a given number of even 
parts — or at least as even as they can be. The sum of the parts should be 
the original value, but each part should be an integer, and they should be 
as close as possible.
Example code:
splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing 
the parts. Ignoring the order of the parts, there is only one valid solution 
for each input to your function!
*/

const splitInteger = function (num, parts) {
    let n = Math.floor(num / parts)
    const arr = [];
    for (let i = 0; i < parts; i++) {
        arr.push(n)
    }
    if (arr.reduce((a, b) => a + b, 0) === num) return arr
    for (let i = 0; i < parts; i++) {
        arr[i]++
        if (arr.reduce((a, b) => a + b, 0) === num) return arr
    }
}


test('should handle easy cases', function () {
    expect(splitInteger(10, 1).sort()).toStrictEqual([10]);
    expect(splitInteger(2, 2).sort()).toStrictEqual([1, 1]);
    expect(splitInteger(20, 5).sort()).toStrictEqual([4, 4, 4, 4, 4]);
});