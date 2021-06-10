/*
Given a non-negative integer n, write a function to_binary/ToBinary which 
returns that number in a binary format.
Example:
/*toBinary(1) should return 1 */
/*(5)   should return 101 */
/*(11)  should return 1011 
*/

function toBinary(n) {
    let nN = n.toString(2);
    return Number(nN);
}

/* ARBA
toBinary = (n) => parseInt(n.toString(2));

----ARBA
let toBinary = n => +n.toString(2)

*/
test("Tests", function () {
    expect(toBinary(1)).toBe(1);
    expect(toBinary(2)).toBe(10);
    expect(toBinary(3)).toBe(11);
    expect(toBinary(5)).toBe(101);
});