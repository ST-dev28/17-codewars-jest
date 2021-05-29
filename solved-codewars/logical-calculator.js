/*
Given an array of Boolean values and a logical operator, return a Boolean result based on 
sequentially applying the operator to the values in the array.
Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/
/*
function logicalCalc(array, op) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === undefined) break;
        if (op === 'AND') arr.push(array[i] && array[i + 1]);
        if (op === 'OR') arr.push(array[i] || array[i + 1]);
        if (op === 'XOR') arr.push(array[i] != array[i + 1]);
    }
    if (op === 'AND') return !arr.includes(false);
    if (op === 'OR') return arr.includes(true);
    if (op === 'XOR') {
        if (arr.includes(false) && arr.includes(true)) {
            if (arr[0] === false && arr[1] === true || array.length === 1) return false;
            if (arr[0] === true && arr[1] === false) return true;
            return true;
        }
        return false;
    }
}
*/
function logicalCalc(array, op) {
    if (op == 'XOR') return array.reduce((item, current) => item != current);
    if (op === 'AND' && array.includes(false)) return false;
    if (op === 'OR' && !array.includes(true)) return false;
    return true
}

/*  ARBA
var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}

function logicalCalc(array, op){
  return array.reduce(ops[op]);
}

------ARBA
const logicalCalc = (array, op) => {
  return array.reduce((acc, cur) => {
    if (op === 'AND') return acc && cur;
    if (op === 'OR') return acc || cur;
    if (op === 'XOR') return acc != cur;
  });
};

----ARBA
function logicalCalc(array, op){
  switch ( op ) {
    case "OR":
     return array.reduce( (a, b) => a || b );
    break;
    case "AND":
      return array.reduce ( (a, b) => a && b);
    break;
    case "XOR":
      return array.reduce ( (a, b) => a != b);
    break;
  }
}
*/

test("Fixed Tests", function () {
    expect(logicalCalc([true, true, true, false], "AND")).toBe(false);
    expect(logicalCalc([true, true, true, false], "OR")).toBe(true);
    expect(logicalCalc([true, true, true, false], "XOR")).toBe(true);
    expect(logicalCalc([true, true, false, false], "AND")).toBe(false);
    expect(logicalCalc([true, true, false, false], "OR")).toBe(true);
    expect(logicalCalc([true, true, false, false], "XOR")).toBe(false);
    expect(logicalCalc([true, false, false, false], "AND")).toBe(false);
    expect(logicalCalc([true, false, false, false], "OR")).toBe(true);
    expect(logicalCalc([true, false, false, false], "XOR")).toBe(true);
    expect(logicalCalc([true, true], "AND")).toBe(true);
    expect(logicalCalc([true, true], "OR")).toBe(true);
    expect(logicalCalc([true, true], "XOR")).toBe(false);
    expect(logicalCalc([false, false], "AND")).toBe(false);
    expect(logicalCalc([false, false], "OR")).toBe(false);
    expect(logicalCalc([false, false], "XOR")).toBe(false);
    expect(logicalCalc([false], "AND")).toBe(false);
    expect(logicalCalc([false], "OR")).toBe(false);
    expect(logicalCalc([false], "XOR")).toBe(false);
    expect(logicalCalc([true], "AND")).toBe(true);
    expect(logicalCalc([true], "OR")).toBe(true);
    expect(logicalCalc([true], "XOR")).toBe(true);
});