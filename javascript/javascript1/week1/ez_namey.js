var firstWords = ["Easy", "Awesome", "Corporate", "Masses", "Believe", "Movement", "Relax", "Amazing", "Wonderful", "Classic"]
var secondWords = ["Mind", "Body", "Hypertext", "Stylesheets", "Javascript", "Beautiful", "Rich", "Popular", "Love","Peace"]

const randomNumber = Math.floor(Math.random() * 10) + 0;
const randomNumber1 = Math.floor(Math.random() * 10) + 0;
console.log(randomNumber,randomNumber1);

var startupName = firstWords[randomNumber] +" "+ secondWords[randomNumber1];
console.log(startupName.length);
 var numberOfCharacters = (firstWords[randomNumber]).length + (secondWords[randomNumber1]).length;
console.log("The startup name " +startupName+ " contains " +numberOfCharacters+ " characters.");
console.log(`The startup name ${startupName} contains ${numberOfCharacters} characters.`)