/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
    // do magic
    const x = arr.filter((elm) => elm === arr[0]);
    const y = arr.filter((elm) => elm !== arr[0]);

    return x.length > y.length ? y[0] : x[0];
}

/* ---ARBA---
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

---ARBA---
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
*/


test("test", () => {
    expect(findUniq([0, 1, 0])).toBe(1);
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
    expect(findUniq([3, 10, 3, 3, 3])).toBe(10);
});