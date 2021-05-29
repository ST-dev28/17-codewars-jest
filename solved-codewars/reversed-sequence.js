/*
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reverse();
};

/*  ARBA
const reverseSeq = n => {
  let answer = [];          //intialize an array

  for (let i=n; i>0; i--){  //loop down from n to 1
    answer.push(i);         //push each i to the answer array
  }

  return answer;            //return answer;
};

----ARBA
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

----ARBA
const reverseSeq = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};
*/

test("Sample Test", function () {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
});