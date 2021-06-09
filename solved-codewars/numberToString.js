/*
The code gives an error!
a = 123.toString
Fix it!
*/


var a = 123..toString();

/*  ARBA variantai: 
var a = String(123);
var a = 123..toString();
var a = 123 .toString()
var a = (123).toString();
var a = 123 + '';
var a = Number(123).toString();
const a = '123';
var a = 123["toString"]();
let a = `${123}`;
const a = [123].join('');
const a = String.prototype.split.call(123)[0];
const a = JSON.stringify(123);
const a = (123).toFixed();
var a = parseInt(123).toString();

*/
test("test", () => {
    expect(a).toBe('123', 'Wrong!')
});