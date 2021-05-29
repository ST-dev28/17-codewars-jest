/*
Return the Nth Even Number
Example(Input --> Output)
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/

function nthEven(n) {
    return n * 2 - 2;
}

/*  SHORTLY
const nthEven = n => n * 2 - 2;
*/


test("test", () => {
    expect(nthEven(1)).toBe(0, "Wrong Value!");
    expect(nthEven(2)).toBe(2, "Wrong Value!");
    expect(nthEven(3)).toBe(4, "Wrong Value!");
    expect(nthEven(100)).toBe(198, "Wrong Value!");
    expect(nthEven(1298734)).toBe(2597466, "Wrong Value!");
});
