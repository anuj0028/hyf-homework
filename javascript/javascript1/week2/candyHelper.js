let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    if (candyType === 'sweet') {
        boughtCandyPrices.push(weight * 0.5)
    } else if (candyType === 'Chocolate') {
        boughtCandyPrices.push(weight * 0.7)
    } else if (candyType === 'Toffee') {
        boughtCandyPrices.push(weight * 1.1)
    } else if (candyType === 'Chewing-gum') {
        boughtCandyPrices.push(weight * 0.03)
    } else {
        console.log('not found');
    }
}
addCandy('Toffee', 20);
addCandy('sweet', 20);


console.log(boughtCandyPrices);
let amountToSpend = Math.random() * 100;
console.log('amount to spend',amountToSpend)
function canBuyMoreCandy() {
    let sum = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        sum += boughtCandyPrices[i];
    }
    console.log('sum',sum)
    if (amountToSpend > sum) {
        console.log('You can buy more candy')
    } else {
        console.log("You don't have enough money")
    }
}
 canBuyMoreCandy()