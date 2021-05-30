/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let arr = s.split(' ');
    let shortest = s.length;
    for(let word of arr) {
        if (word.length < shortest) {
            shortest = word.length;
        }
    }
    return shortest;
}

/*   ARBA
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

-----ARBA
function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

---ARBA ilgas
function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}
*/

test("Example tests",() =>{
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toBe(3);
    expect(findShort("turns out random test cases are easier than writing out basic ones")).toBe(3); 
    expect(findShort("Let's travel abroad shall we")).toBe(2);
    });