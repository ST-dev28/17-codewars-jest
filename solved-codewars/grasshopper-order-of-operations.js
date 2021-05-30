/*
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the 
answer 32 but instead the function keeps returning 10. Fix the function 
to make it return 32 without changing the number or the operators.
*/

function orderOperations () {
    return ((2 + 2) * (2 + 2)) * 2;
  }

  test('should not use any numbers other than 2', () => {
      let re = /([0,1,3,4,5,6,7,8,9])/gi
      let others = func.match(re)
      expect(others, null)
    })
    test('should have the plus and the multiplication in the same place', () => {
      let re = /[+,*]/gi
      let operators = func.match(re)
      expect(operators[0], '+')
      expect(operators[1], '*')
      expect(operators[2], '+')
      expect(operators[3], '*')
    })
  test('should get the correct number', () => {
    expect(orderOperations()).toBe(32);
  });