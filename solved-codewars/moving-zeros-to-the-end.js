/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    if (arr.length <= 1) { return arr; }

    let zero = arr.indexOf(0);
    if (zero === -1 || zero === arr.length - 1) { return arr; }

    for (let i = zero + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[zero++] = arr[i];
            arr[i] = 0;
        }
    }
    return arr;
}

/*  ARBA
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

----ARBA
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

-----ARBA 
var moveZeros = function (arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}
*/



test("test", () => {
    expect((moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
});