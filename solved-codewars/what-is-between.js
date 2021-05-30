/*
Complete the function that takes two integers (a, b, where a < b) and return an 
array of all integers between the input parameters, including them.
For example:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){ 
        arr.push(i)
    }
    return arr;
  }

/*  ARBA
function between(a, b) {
    return Array(b - a + 1).fill().map((list, number) => a + number)
  }

  -----ARBA
  function between(a, b) {
  return Array.from( {length: (b-a+1)}, (v, i) => a+i );
}

-----ARBA
function between(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  
  for (var i = min, arr = []; i <= max; arr.push(i++));
    return arr;
}
*/

  describe("Basic tests", () => {
    test("between(1, 4)", () => expect(between(1, 4)).toStrictEqual([1, 2, 3, 4]));
    test("between(-2, 2)", () => expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]));
  });