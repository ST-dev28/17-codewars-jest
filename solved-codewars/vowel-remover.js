/*
Create a function called shortcut to remove all the lowercase 
vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

function shortcut(string) {
    return string.replace(/[aeiou]/g, '');
}


test("test", () => {
    expect(shortcut('hello')).toBe('hll', 'encode failed. Your result: ' + shortcut('hello') + ' Expected result: hll')
    expect(shortcut('how are you today?')).toBe('hw r y tdy?', 'shortcut did not work properly');
    expect(shortcut('complain')).toBe('cmpln', 'shortcut did not work properly');
    expect(shortcut('never')).toBe('nvr', 'shortcut did not work properly');

});