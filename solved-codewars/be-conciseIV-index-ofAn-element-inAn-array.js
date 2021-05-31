/*
Provided is a function find which accepts two parameters in the following order: 
array, element and returns the index of the element if found and "Not found" otherwise. 
Your task is to shorten the code as much as possible in order to meet the strict 
character count requirements of the Kata. (no more than 85) You may assume that all 
array elements are unique.
*/

const find = (array, el) =>
    array.includes(el) ? array.indexOf(el) : 'Not found';



/*  ARBa shorter
const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x;

------ARBa long
function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}
*/
test("should behave as expected", () => {
    var array = [2, 3, 5, 7, 11];
    expect(find(array, 5)).toBe(2);
    expect(find(array, 11)).toBe(4);
    expect(find(array, 3)).toBe(1);
    expect(find(array, 2)).toBe(0);
    expect(find(array, 7)).toBe(3);
    expect(find(array, 1)).toBe("Not found");
    expect(find(array, 8)).toBe("Not found");
    array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
    expect(find(array, "Hello World")).toBe(1);
    expect(find(array, "lorem ipsum")).toBe("Not found");
    expect(find(array, "Lorem Ipsum")).toBe(3);
    expect(find(array, false)).toBe(2);
    expect(find(array, true)).toBe(0);
    expect(find(array, Math.PI)).toBe(5);
    expect(find(array, 3.14)).toBe("Not found");
    expect(find(array, 6)).toBe(4);
});