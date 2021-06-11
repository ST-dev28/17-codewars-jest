
//Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.

function monkeyTalk(phrase) {
    const str = phrase.split(' ');
    const vowel = /^(a|i|u|e|o)/i;
    //console.log(str);
    //console.log(vowel);
    const monkeyStr = str.map((element) => vowel.test(element) ? 'eek' : 'ook').join(' ');
    return monkeyStr.charAt(0).toUpperCase() + monkeyStr.slice(1,) + '.'
}

/* ---ARBA---
const monkeyTalk = phrase =>
  phrase
    .toLowerCase()
    .replace(/\w+/g, m => 'aeiou'.includes(m[0]) ? 'eek' : 'ook')
    .replace(/^./, m => m.toUpperCase())
  + '.';

  ---ARBA---
function monkeyTalk(p){
  return (p=> p[0].toUpperCase() + p.slice(1)+'.')
         (p.replace(/\w+/g, w=> /^[aeuio]/i.test(w) ? 'eek' : 'ook'));
}
*/

test("test", () => {
    expect(monkeyTalk('Hello')).toBe('Ook.');
    expect(monkeyTalk('Everyone')).toBe('Eek.');
    expect(monkeyTalk('Hello Everyone')).toBe('Ook eek.');
    expect(monkeyTalk('Everyone Hello')).toBe('Eek ook.');
});