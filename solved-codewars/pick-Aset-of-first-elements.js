/*
Write a function to get the first elements of 
asequence. Passing a parameter n (default=1) 
will return the first n elements of the sequence.
If n == 0 return an empty sequence []
*/



function first(arr, n) {
    if (n === 0) return [];
    if(n >= 0) return n >= 0 ? arr.slice(0, n) : [];
    return arr[0];
}
/*
function first(arr, n) {
    if (n === 0) return [];
    if(n >= 1) return arr.slice(0, n);
    
    return arr.slice(0, -n);
    }
*/
test("first elements of asequence", () => {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    expect(first(arr)).toBe(['a']);
    expect(first(arr, 2)).toBe(['a', 'b']);
    expect(first(arr, 3)).toBe(['a', 'b', 'c']);
});