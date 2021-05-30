/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
}

/*  ARBA
const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

----ARBA
function binaryArrayToNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) 
  {
      if (arr[i] === 1)
        result += 1 << arr.length - 1 - i;
    
  }
  return result;
}
*/

test("Example tests", () => {
  expect(binaryArrayToNumber([0,0,0,1])).toBe(1);
  expect(binaryArrayToNumber([0,0,1,0])).toBe(2);
  expect(binaryArrayToNumber([1,1,1,1])).toBe(15);
  expect(binaryArrayToNumber([0,1,1,0])).toBe(6);
});