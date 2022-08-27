const num = 781296;

const findSum = (num, sum = 0) => {
if(num){
return findSum(Math.floor(num / 10), sum + (num % 10));

};
return sum;

};

const palindromeDigitSum = (num = 1) => {

const sum = findSum(num);
const str = String(sum);
const arr = str.split('');
const reversed = arr.reverse();
const revNum = +arr.join('');

return revNum === sum;
};

console.log(palindromeDigitSum(num));