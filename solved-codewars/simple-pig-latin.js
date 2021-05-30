/*
Move the first letter of each word to the end of it, then add "ay" to the end of 
the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
    return str.split(' ').map(value => {
        if (!value.match(/^[.,:!?]/)) {
        value = value + value[0] + 'ay';
        value = value.slice(1);
        }
        return value 
    }).join(' ');
  }

  /*  ARBA
  function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
----ARBA
function pigIt(str){
  return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
}
*/

  test("test", () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
    });

