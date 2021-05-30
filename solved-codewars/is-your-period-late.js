/*
In this kata, we will make a function to test whether a period is late.
Our function will take three parameters:
last - The Date object with the date of the last period
today - The Date object with the date of the check
cycleLength - Integer representing the length of the cycle in days
Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

function periodIsLate(last, today, cycleLength) {
    let milisecondsPerDay = 1000 * 60 * 60 * 24;
    let days =  Math.floor(( today - last ) / milisecondsPerDay) 
    console.log(days)
    if(days > cycleLength) {
    return true
    } else {
    return false;
    }
  }

  /*  ARBA shorter
  function periodIsLate(last, today, cycleLength) {
  return (today-last)/86400000>cycleLength
}

-----ARBA
function periodIsLate(last, today, c){
  return (last.setDate(last.getDate() + c),last < today)
}

-----ARBA
const periodIsLate = (last, today, cycleLength) => {
  const date = new Date(last)
  date.setDate(date.getDate() + cycleLength)
  return date < today;
}
*/

test("test", () => {
    expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)).toBe(false);
    expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)).toBe(true);
    
      });