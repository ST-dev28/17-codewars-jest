/*
Remove a exclamation mark from the end of string. For a beginner kata, you can assume 
that the input data is always a string, no need to verify it.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

function remove(s) {
    return s.replace(/\!$/, '');

}

/*  ARBA 
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

------ARBA
function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}
*/


test("It should works for basic tests", function () {
    expect(remove("Hi!")).toBe("Hi");
    expect(remove("Hi!!!")).toBe("Hi!!");
    expect(remove("!Hi")).toBe("!Hi");
    expect(remove("!Hi!")).toBe("!Hi");
    expect(remove("Hi! Hi!")).toBe("Hi! Hi");
    expect(remove("Hi")).toBe("Hi");
})