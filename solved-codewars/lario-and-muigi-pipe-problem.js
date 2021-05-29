/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your 
stages again.
The pipes connecting your level's stages together need to be fixed before you receive any 
more complaints. Each pipe should be connecting, since the levels ascend, you can assume 
every number in the sequence after the first index will be greater than the previous and 
that there will be no duplicates.
Task
Given the a list of numbers, return the list so that the values increment by 1 for each 
index up to the maximum value.
Example
Input: 1,3,5,6,7,8
Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers){ 
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let size = max - min + 1;
    let result = [];
    for (let i = 0; i < size; i++){
      result[i] = i + min;
    }
    return result;
}

/*   ARBA
function pipeFix(num, arr = [] ){
  for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
    arr.push(i)
  }
  return arr
}

----ARBA
function pipeFix(num){
  var max = Math.max(...num)
  var min = Math.min(...num)
  return new Array(max-min+1).fill(min).map((a, b)=> a+b)
}
*/

test("Tests", () => {
    expect(pipeFix([1,2,3,5,6,8,9])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    expect(pipeFix([1,2,3,12])).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(pipeFix([6,9])).toStrictEqual([6,7,8,9]);
    expect(pipeFix([-1,4])).toStrictEqual([-1,0,1,2,3,4]);
    expect(pipeFix([1,2,3])).toStrictEqual([1,2,3]);
    });