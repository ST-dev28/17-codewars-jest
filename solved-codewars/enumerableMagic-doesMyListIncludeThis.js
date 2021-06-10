/*
Create a method that accepts a list and an item, and returns true if the 
item belongs to the list, otherwise false.
*/

function include(arr, item) {
    if (arr.includes(item)) return true;
    return false;
}

/*  ARBA short
const include = (arr, item) => arr.includes(item);

-----ARBA
function include(a, i){return a.includes(i);}

 ----ARBA
 function include(arr, item){
  return Boolean(~arr.indexOf(item));
}
*/

test("test", () => {
    expect(include([1, 2, 3, 4], 3)).toBe(true)
    expect(include([1, 2, 4, 5], 3)).toBe(false)
});