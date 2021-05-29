/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs 
and outputs the expected value. Output should be the length of the longest word, 
as a number.
There will only be one 'longest' word.
*/
function findLongest(str) {
    var spl = str.split(" "),
        longest = 0;   
    for (let i in spl) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
    return longest;
  }

 /*  ARBA
function findLongest(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
    }

----ARBA
const findLongest = str =>
  Math.max(...str.split(` `).map(val => val.length));
*/

  test("Basic tests",() => {
    expect(findLongest("The quick white fox jumped around the massive dog")).toBe(7);
    expect(findLongest("Take me to tinseltown with you")).toBe(10); 
    expect(findLongest("Sausage chops")).toBe(7); 
    expect(findLongest("Wind your body and wiggle your belly")).toBe(6); 
    expect(findLongest("Lets all go on holiday")).toBe(7); 
    })