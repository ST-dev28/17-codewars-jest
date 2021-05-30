/*
You are given a dictionary/hash/object containing some languages and your test 
results in the given languages. Return the list of languages where your test 
score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a]);
}

/*  ARBA longer
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);

  -----ARBA
  const myLanguages = results => 
  Object.entries(results)
        .sort((a,b)=> b[1] - a[1])
        .filter(i=> i[1] >= 60)
        .map(i => i[0])

-----ARBA
const myLanguages = results => {
  return Object.keys(results)
    .filter(key => results[key] >= 60)
    .sort((a,b) => results[b]-results[a]);
}

------ARBA long----
function myLanguages(results) {
    const lang = {};
    for (let key in results) {
        lang[results[key]] = key;
    }
    const newKeys = Object.keys(lang);
    const keysAsNumbers = newKeys.map(x => +x);
    const sortedKeys = keysAsNumbers.sort((a, b) => b - a);
    let newArr = [];
    for (let x of sortedKeys) {
        if (x >= 60) {
            newArr.push(lang[x]);
        }
    }
    return newArr;
}
*/

test("Fixed tests", function(){
    expect(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})).toStrictEqual(["Ruby", "Python"]);
    expect(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})).toStrictEqual(["Dutch", "Greek", "Hindi"]);
    expect(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})).toStrictEqual([]);
  });