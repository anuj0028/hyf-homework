// House price for Peter
var wide = 8;
var deep = 10;
var high = 10;
var gardenSizeInM2 = 100;
var beforePrice = 2500000;
var volumeInMeters = wide * deep * high ;

var housePrice;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

output = ((housePrice < beforePrice)? "too low" : "too high") ;
console.log("The price of house is" +beforePrice+ "and Peter is paying" +housePrice+ "that is" +output+ ".")

// House price for Julia
var wide = 5;
var deep = 11;
var high = 8;
var gardenSizeInM2 = 70;
var beforePrice = 1000000;
var volumeInMeters = wide * deep * high ;

var housePrice;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

output = ((housePrice < beforePrice)? "too low" : "too high") ;
console.log("The price of house is" +beforePrice+ "and Julia is paying" +housePrice+ "that is" +output+ ".")