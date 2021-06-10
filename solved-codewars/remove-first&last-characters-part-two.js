/*
This is a spin off of my first kata. You are given a list of character sequences as a comma 
separated string. Write a function which returns another string containing all the character 
sequences except the first and the last ones, separated by spaces. If the input string is empty, 
or the removal of the first and last items would cause the string to be empty, return a null value.
*/

const array = arr => arr.split(',').slice(1, -1).join(' ') || null;

/*  ARBA
function array(arr) {
    return arr.split(',').slice(1, -1).join(' ') || null;
}
--- ARBA
function array(arr){
  arr = arr.split(',');
  if (arr.length < 3) {
    return null;
  }
  return arr.slice(1, arr.length - 1).join(' ');
}

-----ARBA
const array = arr => arr.split(',').length < 3 ? null : arr.split(',').slice(1, -1).join(' ');
*/

test("Tests", function () {
    expect(array('')).toBe(null);
    expect(array('1')).toBe(null);
    expect(array('1, 3')).toBe(null);
    expect(array('1,2,3')).toBe('2');
});