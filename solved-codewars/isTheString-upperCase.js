/*
Add the isUpperCase method to String to see whether the string 
is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it 
does not contain any lowercase letter so any string containing 
no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
}

/* ---ARBA---
String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};

---ARBA trumpas---
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

---ARBA---
//define the string prototype here
String.prototype.isUpperCase = function() {

  return this == this.toUpperCase() ? true : false;
}
*/

test("should work for the examples provided in the description", () => {
    //expect(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
    expect('c'.isUpperCase()).toBe(false, 'c is not upper case');
    expect('C'.isUpperCase()).toBe(true, 'C is upper case');
    expect('hello I AM DONALD'.isUpperCase()).toBe(false, 'hello I AM DONALD not is upper case');
    expect('HELLO I AM DONALD'.isUpperCase()).toBe(true, 'HELLO I AM DONALD is upper case');
    expect('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()).toBe(false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    expect('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase()).toBe(true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
});

test("should also work for a few other basic tests", () => {
    expect('Hello World'.isUpperCase()).toBe(false, 'Hello World is not upper case');
    expect('hello world'.isUpperCase()).toBe(false, 'hello world is not upper case');
    expect('Hello world'.isUpperCase()).toBe(false, 'Hello world is not upper case');
    expect('hello World'.isUpperCase()).toBe(false, 'hello World is not upper case');
    expect('HELLO WORLD'.isUpperCase()).toBe(true, 'HELLO WORLD is upper case');
    expect('Bob walks his dog every day.'.isUpperCase()).toBe(false, 'Bob walks his dog every day. is not upper case');
    expect('BOB walks his dog every day.'.isUpperCase()).toBe(false, 'BOB walks his dog every day. is not upper case');
    expect('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase()).toBe(true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    expect('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase()).toBe(false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    expect('#lovewins'.isUpperCase()).toBe(false, '#lovewins is not upper case');
    expect('#Lovewins'.isUpperCase()).toBe(false, '#Lovewins is not upper case');
    expect('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    expect('#LoveWins'.isUpperCase()).toBe(false, '#LoveWins is not upper case');
    expect('#LOVEWins'.isUpperCase()).toBe(false, '#LOVEWins is not upper case');
    expect('#LoveWINS'.isUpperCase()).toBe(false, '#LoveWINS is not upper case');
    expect('#LOVEWINs'.isUpperCase()).toBe(false, '#LOVEWINs is not upper case');
    expect('#lOVEWINS'.isUpperCase()).toBe(false, '#lOVEWINS is not upper case');
    expect('#LOVEWINS'.isUpperCase()).toBe(true, '#LOVEWINS is upper case');
});