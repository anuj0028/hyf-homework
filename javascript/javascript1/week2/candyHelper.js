var boughtCandyPrices = [];
function addCandy(candyType, weight) {
    var price;
    if (candyType==='Sweet') {
        price=weight*0.5;
    }
    else if (candyType=='Chocolate') {
        price=weight*0.7;
    }
    else if (candyType=='Toffe') {
        price=weight*1.1;
    }
    else (candyType=='Chewing-gum')
        price=weight*0.03;
    boughtCandyPrices.push(price);
    console.log(candyType, weight);
}
addCandy('Toffe',20);


function canBuyMoreCandy() {
    var amountToSpend = Math.random() * 100;
    var totalPrice = 0;

    for (let i=0; i < boughtCandyPrices.length; i++){
        totalPrice += boughtCandyPrices[i];
    }
    if (totalPrice<amountToSpend) {
        console.log("You can buy more.")
    }
    else{
        console.log("You cannot buy more.")
    }
}
canBuyMoreCandy();
