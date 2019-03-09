// Goodboy-Oldboy (A dog age calculator)
var dogYearOfBirth = 2017;
var dogYearFuture = 2027;
var dogYear;
var humanYear;
humanYear = dogYearFuture - dogYearOfBirth;
dogYear = humanYear * 7;
var shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears)
{
    console.log("Your dog will be" + humanYear + "human years old in" + dogYearFuture)
}
else {
    console.log("Your dog will be" + dogYear + "human years old in" + dogYearFuture)
}