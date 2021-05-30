/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter 
string on the outside and the longer string on the inside. The strings will not be the 
same length, but they may be empty ( length 0 ).

For example:
solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
*/

const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;

/*  ARBA
function solution(a, b){
    if (a.length > b.length) return b + a + b;
    if (a.length < b.length) return a + b + a;
  }
*/
  test("Should pass sample tests", function() {
    expect(solution('45', '1')).toBe('1451');
    expect(solution('13', '200')).toBe('1320013');
    expect(solution('Soon', 'Me')).toBe('MeSoonMe');
    expect(solution('U', 'False')).toBe('UFalseU');
  });