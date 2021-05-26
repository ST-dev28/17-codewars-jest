
//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase();
}

test("should pass the basic tests", function () {
    expect(makeUpperCase("hello")).toBe("HELLO");
});

