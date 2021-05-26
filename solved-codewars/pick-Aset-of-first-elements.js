/*
Write a function to get the first elements of 
asequence. Passing a parameter n (default=1) 
will return the first n elements of the sequence.
If n == 0 return an empty sequence []
*/

function first(arr, n) {
    const newArr = arr.slice(0, n)
    if (n === 0) {
        return [];
    }
    return newArr;
}

test("first elements of asequence", () => {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    expect(first(arr)).toBe(['a']);
    expect(first(arr, 2)).toBe(['a', 'b']);
});