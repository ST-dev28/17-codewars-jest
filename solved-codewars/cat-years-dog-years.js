/*
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function (humanYears) {
    const catDogYfirst = 15;
    const catDogYsecond = 9;

    const catYnext = 4;
    const dogYnext = 5;

    if (humanYears === 1) return [humanYears, catDogYfirst, catDogYfirst];
    if (humanYears === 2) return [humanYears, catDogYfirst + catDogYsecond, catDogYfirst + catDogYsecond];
    if (humanYears > 2) return [humanYears, catDogYfirst + catDogYsecond + ((humanYears - 2) * catYnext), catDogYfirst + catDogYsecond + ((humanYears - 2) * dogYnext)];
}

/*  ARBA
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

-----ARBA
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];
 ----ARBA
 var humanYearsCatYearsDogYears = function(h) {
  return [h, h==1 ? 15 : h==2 ? 24 : 24+4*(h-2), h==1 ? 15 : h==2 ? 24 : 24+5*(h-2)];
}
*/

test("one", function () {
    expect(humanYearsCatYearsDogYears(1)).toStrictEqual([1, 15, 15]);
    expect(humanYearsCatYearsDogYears(2)).toStrictEqual([2, 24, 24]);
    expect(humanYearsCatYearsDogYears(10)).toStrictEqual([10, 56, 64]);
});