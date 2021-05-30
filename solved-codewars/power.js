/*
The goal is to create a function 'numberToPower(number, power)' that "raises" 
the number up to power (ie multiplies number by itself power times).
Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

const numberToPower = (number, power) => {
    let result = 1
    for (let i = 1; i <= power; i++) result *= number;
    return result;
  }

/*  ARBA
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power -1) : 1;

-------ARBA
function numberToPower(number, power){
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}

-----ARBA (pagal salyga netinka sprendimo budas)
   const numberToPower = (number, power) => number ** power;

   ----ARBA (pagal salyga netinka sprendimo budas)
function numberToPower(number, power){
    return Math.pow(number, power);
  }
  */
  test("test", () => {
    expect(numberToPower(4, 2)).toBe(16);
    expect(numberToPower(10, 4)).toBe(10000);
    expect(numberToPower(10, 0)).toBe(1);
    
      });