/*
Mr. despair wants to jump off Dutch act, So he came to the top of a building.
Scientific research shows that a man jumped from the top of the roof, when the 
floor more than 6, the person will often die in an instant; When the floor is 
less than or equal to 6, the person will not immediately die, he would scream. 
(without proof)
Input: floor, The height of the building (floor)
Output: a string, The voice of despair(When jumping Dutch act)
Example:
sc(2) should return "Aa~ Pa! Aa!"
It means:
Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
if floor<=1, Mr. despair is safe, return ""
*/


const sc = floor => {
    if (floor <= 1) return '';
    if (floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`;
    if (floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`;
  }

/*  ARBA
const sc=(floor)=>floor>1?new Array(floor).join('Aa~ ')+'Pa!'+(floor>6?'':' Aa!'):'';
//or you can use the ES6 new API array.from :)   just like follow:
const otherSc=(floor)=>floor>1?Array.from({length:floor-1}).map(a=>'Aa~ ').join('')+'Pa!'+(floor>6?'':' Aa!'):'';

// Recursive solution with human words
const sc = (floor, cry = false, die = false) => {
  if (floor <= 0) return '';             // wrong input
  if (floor == 2) cry = true;            // if man was at 7th floor he'll cry
  if (floor == 7) die = true;            // if man was at 7th floor he'll die
  floor--;                               // recursive step
  if (!floor && die) return 'Pa!';       // if man is landing and have to die
  if (!floor && cry) return 'Pa! Aa!'    // if man is landing and have to cry
  if (!floor && !cry) return ''          // if man is landing and havn't to cry
  return 'Aa~ ' + sc(floor, cry, die);   // recursive call
}
*/

  test("test", () => {
    expect(sc(2)).toBe("Aa~ Pa! Aa!", "good luck!");  
    expect(sc(6)).toBe("Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
    expect(sc(7)).toBe("Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
    expect(sc(10)).toBe("Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
    expect(sc(1)).toBe("", "good luck!"); 
    expect(sc(-1)).toBe("", "good luck!"); 
      });