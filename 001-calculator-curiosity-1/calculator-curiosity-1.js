const sumByNum = x => y => x + y;
const multiplyByNum = x => y => x * y;
const powerToNum = x => y => x**y; 
const repeat = n => f => x =>
  n === 0 ? x : repeat (n - 1) (f) (f(x - 1))

const sumBy13 = sumByNum(13);
const multiplyBy8 = multiplyByNum(8);
const tenToPower = powerToNum(10);
const eightFollowedByNZeros = x => multiplyBy8(tenToPower(x))
const numOnlyEightDigits = x => repeat(x)(acc => acc + eightFollowedByNZeros(x))(0)



/*const numOnlyEightDigits = x => {
    let acc = 0;
    x = x - 1;
    while(x >= 0){
        acc += eightFollowedByNZeros(x--)
    }
    return acc;
}*/

console.log(numOnlyEightDigits(2))
