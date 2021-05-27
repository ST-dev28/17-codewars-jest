/*
Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an 
array of strings as an argument and returns a filtered array containing the same elements 
but with the 'geese' removed.
    The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array 
passed to your function, albeit with the 'geese' removed. Note that all of the strings 
will be in the same case as those provided, and some elements may be repeated.
*/

function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(item => !geese.includes(item));

}

/*  ARBA
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  birds = birds.filter(function(a)
  {
  return !geese.includes(a)
  })
  return birds
};
*/

test("Mixed list", function () {
    expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toStrictEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
});
test("No geese", function () {
    expect(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])).toStrictEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
});
test("All geese", function () {
    expect(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])).toStrictEqual([]);
});