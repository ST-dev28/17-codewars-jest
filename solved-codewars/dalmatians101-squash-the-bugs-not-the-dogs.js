/*
Your friend has been out shopping for puppies (what a time to be alive!)... 
He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should 
respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.
*/



function howManyDalmatians(number) {
    if (number <= 10) return "Hardly any";
    if (number <= 50) return "More than a handful!";
    if (number === 101) return "101 DALMATIANS!!!"
    return "Woah that's a lot of dogs!"
}

/*  ---ARBA---
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = number  => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
 
---ARBA---
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = (n) => {
  return n <= 10   ? dogs[0]
       : n <= 50   ? dogs[1]
       : n === 101 ? dogs[3] : dogs[2];
};

---ARBA---
const howManyDalmatians = number =>
  number <= 10 ? `Hardly any` : number <= 50 ? `More than a handful!` : number === 101 ? `101 DALMATIANS!!!` : `Woah that's a lot of dogs!`;

---ARBA---
function howManyDalmatians(number) {
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  switch (true) {
      case number < 11: return dogs[0];
      case number < 51: return dogs[1];
      case number < 101: return dogs[2];
      default: return dogs[3];
  }
}
  */

test("Basic tests", () => {
    expect(howManyDalmatians(26)).toBe("More than a handful!");
    expect(howManyDalmatians(8)).toBe("Hardly any");
    expect(howManyDalmatians(14)).toBe("More than a handful!");
    expect(howManyDalmatians(80)).toBe("Woah that's a lot of dogs!");
    expect(howManyDalmatians(100)).toBe("Woah that's a lot of dogs!");
    expect(howManyDalmatians(101)).toBe("101 DALMATIANS!!!");
})