/*
Write a function which calculates the average of 
the numbers in a given list.
Note: Empty arrays should return 0.
*/

function find_average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}


test("average of fiven numbers", () => {
    expect(find_average([1, 1, 1])).toBe(1);
    expect(find_average([1, 2, 3])).toBe(2);
    expect(find_average([1, 2, 3, 4])).toBe(2.5);
});
