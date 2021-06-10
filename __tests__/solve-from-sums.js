/*
You have been given a list of sums with some unknown parameters 
but a known result, your task is to calculate the value of the 
individual parameters and return an object containing the parameter 
as a key and the value as the value.

This should be all the information needed to solve this kata, good luck! :)
*/


const solver = function (sums) {
    return {};
}

test('[a = 2] Tests', () => {
    var s = new solver(['a+a=4']);
    expect(s.a).toBe(2);
});

test('[a = 2, b = 1] Tests', () => {
    var s = new solver(['a+a=4', 'a+b=3']);
    expect(s.a).toBe(2);
    expect(s.b).toBe(1);
});

test('[a = 2, b = 1, c = 3] Tests', () => {
    var s = new solver(['c+a=5', 'a+b=3', 'a+a=4']);
    expect(s.a).toBe(2);
    expect(s.b).toBe(1);
    expect(s.c).toBe(3);
});