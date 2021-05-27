/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average 
student in your class.
You receive an array with your peers' test scores. Now calculate the average and 
compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating 
the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    sum = sum / classPoints.length
    if (sum > yourPoints) {
        return false
    } else {
        return true
    }
}

/*   ARBA
function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
    return average > yourPoints ? false : true
}
*/

test("betterThanAverage", function () {
    expect(betterThanAverage([2, 3])).toBe(5, true);
    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88])).toBe(75, true);
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90])).toBe(9, false);
});