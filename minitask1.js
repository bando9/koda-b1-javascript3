const numbers = [3, 1, 35, 8, 9, 10, 43, 87, 43, 2];
console.log(`numbers: ${numbers}`);

// * map (built-in)
const numbersMultiple = numbers.map((numb) => numb * 2);
console.log(`numbers built-in: ${numbersMultiple}`);

// * manual map
const numbersMultipleSec = [];
for (let i = 0; i < numbers.length; i++) {
  const numb = numbers[i];
  numbersMultipleSec[i] = numb * 2;
}
console.log(`numbers manual: ${numbersMultipleSec}`);
