/*
You will be given a number and you will need to return it as a string in Expanded Form. 
For example
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
If you liked this kata, check out part 2!!
*/

function expandedForm(num) {
    let digits = num.toString();
    let result = [];
  
    for(let i = 0; i < digits.length; i++) {
      if(digits[i] > 0) {
        let zeros = '';
        // console.log(digits.length-i-1)
        for(let z = digits.length - i -1; z > 0; z--) {
          zeros += '0';
        }
        result.push(Number(digits[i] + zeros));
      }
    }
    return result.join(' + ');
  }

  /*  ARBA
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

----ARBA ----
var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

----ARBA---
const expandedForm = num => 
  [...(num + '')]
    .reverse()
    .map(formatZeros)
    .filter(Boolean)
    .reverse()
    .join(' + ')
  */

  test("test", () => {
    expect(expandedForm(12)).toBe('10 + 2');
    expect(expandedForm(42)).toBe('40 + 2');
    expect(expandedForm(70304)).toBe('70000 + 300 + 4');
      });