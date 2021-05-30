/*
Write a function that takes an integer as input, and returns the number of bits that 
are equal to one in the binary representation of that number. You can guarantee that 
input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should 
return 5 in this case
*/
var countBits = function(n) {
    let count = 0;
    while(n > 0){
      if(n % 2 === 1) {
        count++;
      }
      n = Math.floor(n / 2);
    }
    return count;
  }

/*   ARBA 
var countBits = function(n) {
    n = n.toString(2).replace(/0/g, '').split('');
    let count = 0;
    for(let i = 0; i < n.length; i++) {
        count += parseInt(n[i]);
    }
    return count; 
  }
----------ARBA
  function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
-----ARBA
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length

------ARBA
var countBits = function(n) {
  return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
}
  */
 
  test("Testing for fixed tests", () => {
    expect(countBits(0)).toBe(0);
    expect(countBits(4)).toBe(1);
    expect(countBits(7)).toBe(3);
    expect(countBits(9)).toBe(2);
    expect(countBits(10)).toBe(2);
    })

