/*
Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
*/

const nameShuffler = str => str.split(' ').reverse().join(' ');

/* ARBA l
function nameShuffler(str) {
    return str.split(' ').reverse().join(' ');
}

-----ARBA
const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

  -----ARBA
  function nameSuffle(str){
  var name = str.split(' ');
  return name[1] + ' ' + name[0];
}
*/

test("test", () => {
    expect(nameShuffler('john McClane')).toBe('McClane john');
});