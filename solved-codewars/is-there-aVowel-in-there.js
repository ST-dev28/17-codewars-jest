/*
Given an array of numbers, check if any of the numbers are the character 
codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/

function isVow(a) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code)
}
/*  ARBA 
function isVow(a) {
   return a.map(charCode => /[aeiou]/.test(String.fromCharCode(charCode))
       ? String.fromCharCode(charCode)
       : charCode);
}
*/

test("Basic tests", () => {
    expect(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])).toStrictEqual([118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116, 113, 114, 113, 120, 106]);
    expect(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])).toStrictEqual(["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);
});