/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns 
a string of those numbers in the form of a phone number.
Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
  return '(' + numbers.slice(0, 3).join('') + ')' + ' ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6, 10).join('');
}

/*  ARBA
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

------ARBA
function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

-----ARBA
createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())

-----ARBA
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(....)/, '($1) $2-$3');
}
*/

test('Basic tests', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
  });