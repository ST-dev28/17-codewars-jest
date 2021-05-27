/*
This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal 
to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 
1 to n (inclusive).
Your job is to write an algorithm that gets you from the 
input to the output.
*/

function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

/*
function preFizz(n) {
    if (n === 0) return [];
    if (n >= 1)
        return Array.from(Array(n + 1).keys()).slice(1);
}

----ARBA
function preFizz(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}

*/
test("new array", () => {
    expect(preFizz(1)).toStrictEqual([1], `Array should be from 1 to 1`);
    expect(preFizz(2)).toStrictEqual([1, 2], `Array should be from 1 to 2`);
    expect(preFizz(3)).toStrictEqual([1, 2, 3], `Array should be from 1 to 3`);
    expect(preFizz(4)).toStrictEqual([1, 2, 3, 4], `Array should be from 1 to 4`);
    expect(preFizz(5)).toStrictEqual([1, 2, 3, 4, 5], `Array should be from 1 to 5`);
});