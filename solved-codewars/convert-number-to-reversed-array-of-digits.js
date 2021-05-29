/*
Given a random non-negative number, you have to return the digits of this 
number within an array in reverse order.
Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

/* ARBA analogas - ilgesnis
function digitize(n) {
    return n.toString().split('').reverse().map(element => Number(element));
}
*/

test("test", () => {
    expect(digitize(35231)).toStrictEqual([1, 3, 2, 5, 3]);
});

