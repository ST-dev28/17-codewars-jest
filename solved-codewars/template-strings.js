/*
Template Strings, this kata is mainly aimed at the new JS ES6 Update 
introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
*/

var TempleStrings = function (obj, feature) {
    let word = 'are'
    let newStr = obj + ' ' + word + ' ' + feature;
    return newStr;
}

/*  ARBA
var TempleStrings = function(obj, feature) {
  return obj + " are " + feature;
}
-----ARBA
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}
----- ARBA sutrumpintai
let TempleStrings = (obj, feature) => `${obj} are ${feature}`;
*/

test("test", () => {
    expect(TempleStrings("Animals", "Good")).toBe('Animals are Good');
});