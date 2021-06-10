/*
Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
*/

function problem(x) {
    if (typeof x === 'string' || typeof x === '') return 'Error';
    return (x * 50) + 6;
}

/*  ARBA trumpiau
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

----ARBA
const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;

  -----ARBA
  function problem(x){
if(isNaN(x) | x === ""){
 return "Error";
} else {
 return(x * 50)+6
 }
}

------ARBA
function problem(x){
  return x===+x?50*x+6:'Error'
}
*/

test("Basic tests", () => {
    expect(problem("hello")).toBe("Error");
    expect(problem(1)).toBe(56);
    expect(problem(5)).toBe(256);
    expect(problem(0), 6);
    expect(problem(1.2)).toBe(66);
    expect(problem(3)).toBe(156);
    expect(problem("RyanIsCool")).toBe("Error");
    expect(problem(-3)).toBe(-144);
    expect(problem("")).toBe("Error");
    expect(problem(0.03)).toBe(7.5);
})