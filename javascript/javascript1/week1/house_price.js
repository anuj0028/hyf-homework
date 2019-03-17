// House price for Peter
var wide = 8;
var deep = 10;
var high = 10;
var gardenSizeInM2 = 100;
var beforePrice = 2500000;
var volumeInMeters = wide * deep * high ;

var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice,beforePrice);
let output = ((housePrice < beforePrice)? "too low" : "too high") ;// House price for Julia

console.log("The price of house is " +beforePrice+ " and Peter is paying "  +housePrice+ " that is " +output+ ".")
var wideJ= 5;
var deepJ = 11;
var highJ = 8;
var gardenSizeInM2 = 70;
var beforePrice = 1000000;
var volumeInMeters = wide * deep * high ;

var housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice,beforePrice);
output = ((housePrice < beforePrice)? "too low" : "too high") ;
console.log("The price of house is " +beforePrice+ " and Julia is paying " +housePrice+ " that is" +output+ ".")

