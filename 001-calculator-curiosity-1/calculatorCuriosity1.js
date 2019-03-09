const sumByNum = x => y => x + y;
const multiplyByNum = x => y => x * y;
const powerToNum = x => y => x ** y;
const repeat = n => f => x =>
  n === 0 ? x : repeat(n - 1)(f)(x + f(n - 1))


const sumBy13 = sumByNum(13);
const multiplyBy8 = multiplyByNum(8);
const tenToPower = powerToNum(10);
const eightFollowedByNZeros = x => multiplyBy8(tenToPower(x))
const numOnlyDigitsEight = x => repeat(x)(acc => eightFollowedByNZeros(acc))(eightFollowedByNZeros(x))