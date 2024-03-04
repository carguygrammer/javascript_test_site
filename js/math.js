//simple math operations
// const add = (num1, num2) => {
//   console.log(num1 + num2);
// };
// const subtract = (num1, num2) => {
//   console.log(num1 - num2);
// };
// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// function divide(num1, num2) {
//   console.log(num1 / num2);
// }
//generates a random number between 0 and selected number
const randNumberGenerator = (endNum) => {
  const randNum = Math.floor(Math.random() * endNum);
  return randNum;
};

export { randNumberGenerator };
