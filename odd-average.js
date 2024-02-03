function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds);

    let sum = 0;
    for(const number of odds){
sum = sum + number;
    }
    const lenth = odds.length;
    console.log(sum, lenth);
    const avg = sum / lenth;
    return avg;
}


const numbers = [34, 56, 890, 40, 30, 33, 431, 599];
const avg = oddAverage(numbers);
console.log('total average :', avg);