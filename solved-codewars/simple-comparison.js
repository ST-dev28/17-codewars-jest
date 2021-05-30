/*
Write a function that will compare two values, one will be a number and one will 
be a string. Return true if they are the same character (regardless of their 
different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion 
I have disabled some of the built in methods including .toString(), .join(), .split(), 
parseInt and .Number().
*/


const add = (a, b) => a == b;

/*  ARBA
function add(a, b){
    return +a == +b;
  }
*/

test("test", () => {
    expect(add('1', 1)).toBe(true);
    expect(add(1, '1')).toBe(true);
    //expect(add(1, '0')).toBe(false);
    //expect(add('11', 11)).toBe(true);
    //expect(add(12, 12)).toBe(true);
    //expect(add(120, '021')).toBe(false);
     });