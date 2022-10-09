const matchHouses = (n) => {
  if (n === 0) {
    return "Step 0 returns 0 matchsticks."
  } else if (n < 0 || typeof n !== "number") {
    return "The input must be positive number."
  } else {
    let a;
    a = (5 * n) + 1;
    return a;
  }
  
};

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log(matchHouses(0));