
//To remove items in numbersArray equal to randomNumber
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber =parseInt(Math.random() * 11);
console.log(randomNumber);
let indexOfNumber = numbersArray.indexOf(randomNumber);
if (indexOfNumber != 0) {
 numbersArray.splice(indexOfNumber, 1);
 console.log(numbersArray);
} else {
 console.log(`${randomNumber} not found in array`);
}

let numbersToRemove;
for (var i = 0; i < 5; i++) {
    numbersToRemove.push(generateRandomNumber());
   }
   console.log(numbersToRemove);
   for (var i = 0; i < numbersToRemove.length; i++) {
    let indexOfNumber = numbersArray.indexOf(numbersToRemove[i]);
      console.log('Value to remove = '+ numbersToRemove[i]);
    console.log('Index of value = '+ indexOfNumber,);
    if (indexOfNumber != -1) {
      numbersArray.splice(indexOfNumber, 1);
    } else {
      console.log(`${numbersToRemove[i]} not found in array`);
    }
   
   
    console.log(numbersArray);
   }
