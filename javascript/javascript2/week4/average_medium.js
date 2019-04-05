const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

let average = 0;
function average1() {
    let sum = housePrices.reduce((previous, current) => current += previous);
    average = sum / housePrices.length;
    console.log(average);
}
average1();

let median = 0;
function median1() {
    housePrices.sort((a, b) => a - b);
    let lowMiddle = Math.floor((housePrices.length - 1) / 2);
    let highMiddle = Math.ceil((housePrices.length - 1) / 2);
    median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
    console.log(median);
}
median1();

let averageAndMedian = [];
function averageAndMedianOfObject(average, median) {
    averageAndMedian.push({average: average, median: median,});
    return averageAndMedian;
}
averageAndMedianOfObject(average, median);
console.log(averageAndMedian);