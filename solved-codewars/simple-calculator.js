/*
You are required to create a simple calculator that returns the result of addition, 
subtraction, multiplication or division of two numbers.
    Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on 
these two numbers. If the variables are not numbers or the sign does not belong to 
the list above a message "unknown value" must be returned.
Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
*/
function calculator(a,b,sign){
    switch(sign)
    {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return "unknown value";
    }
  
  }
  
  /*  ARBA
function calculator(a,b,sign){
    return sign.match(/[-+/*]/g) ? eval(a + sign + b) : "unknown value";
  }

----ARBA 
function calculator(a,b,sign){

  if (sign == '+') {
    return a + b;
    
   } else if (sign == '-') {
     return a - b;
     
    } else if (sign == '/') {
    return a / b;
    
    } else if (sign == '*') {
    return a * b;
    
    } else {
    return "unknown value"
    }
}

-------ARBA
function calculator(a, b, op) {
  if (isNaN(a) || isNaN(b) || /[^\+\-\*\/]/.test(op)) return 'unknown value';
  return {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => a / b
  }[op]() 
}
  */  

test("test", () => {
    expect(calculator(1,2,"+")).toBe(3, "calculate");
    expect(calculator(1,2,"-")).toBe(-1, "calculate");
    expect(calculator(3,5,"*")).toBe(15, "calculate");
    expect(calculator(6,2,"/")).toBe(3, "calculate");
    expect(calculator(6,2,"$")).toBe("unknown value", "calculate"); 
    expect(calculator(6,"h","*")).toBe("unknown value", "calculate");   
})      