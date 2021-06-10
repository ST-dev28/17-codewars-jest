/*
Your task is to create functionisDivideBy (or is_divide_by) to check if an 
integer number is divisible by each out of two arguments.
A few cases:
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
*/

function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) return true;
    return false;
}

/*   ARBA short
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

-----ARBA
function isDivideBy(number, a, b) {
  return [a, b].every(i => number % i === 0)
}

----ARBA
isDivideBy = (n, a, b) => (Number.isInteger(n / a) && Number.isInteger(n / b));
*/

test("test", () => {
    expect(isDivideBy(-12, 2, -6)).toBe(true);
    expect(isDivideBy(-12, 2, -5)).toBe(false);
    expect(isDivideBy(45, 1, 6)).toBe(false);
    expect(isDivideBy(45, 5, 15)).toBe(true);
    expect(isDivideBy(4, 1, 4)).toBe(true);
    expect(isDivideBy(15, -5, 3)).toBe(true);
});
