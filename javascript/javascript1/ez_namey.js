var firstWords = ["Easy", "Awesome", "Corporate", "Masses", "Believe", "Movement", "Relax", "Amazing", "Wonderful", "Classic"]
var secondWords = ["Mind", "Body", "Hypertext", "Stylesheets", "Javascript", "Beautiful", "Rich", "Popular", "Love","Peace"]

const randomNumber = Math.floor(Math.random() * 10) + 0

var startupName = firstWords[randomNumber] +" "+ secondWords[randomNumber];
var numberOfCharacters = (firstWords[randomNumber]).length + (secondWords[randomNumber]).length;
console.log("The startup name" +startupName+ "contains" +numberOfCharacters+ "characters.");