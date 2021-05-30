/*
Given a string s, write a method (function) that will return true if its a valid 
single integer or floating number or false if its not.
Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

const isDigit = s => Number(s) === parseFloat(s)

/* ARBA
function isDigit(s) {
 return s==parseFloat(s);
}

-----ARBA
function isDigit(s) {
  return s.trim() === '' ? false : !isNaN(s.trim());
}

------ARBA
function isDigit(s) {
  
  if (s=="") return false
  if (s==" ") return false
 
  if ((s>0)||(s<=0))
  return true
  
  else return false 
  }
*/

  test("basic tests", function(){
    var input = "s2324";
    expect(isDigit(input)).toBe(false);
    
    input = "-234.4";    
    expect(isDigit(input)).toBe(true);    
  });