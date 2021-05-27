/*
I would like to be able to pass an array with two elements 
to my swapValues function to swap the values. However it 
appears that the values aren't changing.
Can you figure out what's wrong here?
*/

function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

/*  ARBA
function swapValues() {
  return arguments[0].reverse();
}

  ----ARBA
  function swapValues(arr) {
    return arr.reverse();
}

*/
test("test", () => {
    var arr = [1, 2];
    swapValues(arr);
    expect(arr[0]).toBe(2, "Failed swapping numbers");
    expect(arr[1]).toBe(1, "Failed swapping numbers");

});