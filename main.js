// my age 
var myAge = 24

// create earlyYears variable  
var earlyYears = 2;

earlyYears *= 10.5;

//creation of laterYears
var laterYears = myAge - 2;

// lateryears in dog years calc
laterYears *= 4;

// age in dog years
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Nicole'.toLowerCase();

//string interpolation to add in variables 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
