/*
Complete the function that takes a non - negative 
integer n as input, and returns a list of all the powers 
of 2 with the exponent ranging from 0 to n(inclusive).

    Examples
n = 0 ==> [1]        #[2 ^ 0]
n = 1 ==> [1, 2]     #[2 ^ 0, 2 ^ 1]
n = 2 ==> [1, 2, 4]  #[2 ^ 0, 2 ^ 1, 2 ^ 2]
*/

function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

/*  ARBA
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++)
        arr.push(i);
    let mapArr = arr.map(function (number) {
        return Math.pow(2, number);
    });
    return mapArr;
}
*/
test("Example Tests", function () {
    expect(powersOfTwo(0)).toStrictEqual([1]);
    expect(powersOfTwo(1)).toStrictEqual([1, 2]);
    expect(powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16]);
});