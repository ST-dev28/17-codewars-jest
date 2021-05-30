/*
Complete the function that calculates the area of the red square, when the length 
of the circular arc A is given as the input. Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

const squareArea = A => Number(((2 * A / 3.1416)**2).toFixed(2));

/*  ARBA
function squareArea(A){
    return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100
  }

  -----ARBA
  const squareArea = A =>
  Math.round((A / Math.PI) ** 2 * 400) / 100;
*/

test("squareArea(2)", function() {
    expect(squareArea(2)).toBe(1.62);
  });

test  ("squareArea(0)", function() {
    expect(squareArea(0)).toBe(0);
  });
  
test  ("squareArea(14.05)", function() {
    expect(squareArea(14.05)).toBe(80);
  });