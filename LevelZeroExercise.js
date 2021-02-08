// Task 0.1
let x = 0;
let y = 1;
console.log(x)
console.log(y)
x  += 3;
y += x;
console.log(x)
console.log(y)

// Task 0.2
x = 1 + 1 * 2
y = (1 + 1) * 2
z = 1 + (1 * 2)
a = 1 + 1 * 2 / 2;
b = (1 + 1 * 2)/2;
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

// Task 0.3
function hello(string){
    return 'Hello' + ' ' + string + '!'
}
console.log(hello('Tshepo'));

// Task 0.4
function evenOrOdd(number){
    if(number % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(evenOrOdd(67));

// Task 0.5
function findTriangleArea(num1,num2,num3) {
var perimeter = (num1 + num2 + num3)/2;
var area = Math.sqrt(perimeter*((perimeter-num1)*(perimeter-num2)*(perimeter-num3)));
return area;
}

console.log(findTriangleArea(13,20,31)); 

// Task 0.6
function numbers() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

// Task 0.7
function convertCelsiusToFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(30));

function convertFahrenheitToCelsius(fahrenheit){
return (fahrenheit - 32 )* 5/9;
}
console.log(convertFahrenheitToCelsius(86));


// Task 0.8
function  convertNumberTime(number){

    let minutes = number % 60;
    let hours = (number - minutes )/60 ;

    let minutepluralCheck = minutes < 2 ? "munite" : "munites"; 
    let hourPluralCheck = hours < 2 ? "hour " : "hours ";

    let muniteText = minutes + ' ' + minutepluralCheck;
    let hourText = hours + ' ' + hourPluralCheck;

    if(hours == 0) {
         return muniteText; 
    }
    else {
        return minutes > 0 ? hourText + muniteText : hourText; 
    }
}
    
console.log(convertNumberTime(120));

// Task 0.9
function printVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']; 
    let vowelsToPrint = "";

    for(i = 0; i < word.length; i++) {
        if(vowels.includes(word[i].toLowerCase())) {
            vowelsToPrint += word[i];
        } 
    }

    return vowelsToPrint;
} 

console.log(printVowels("Zoe"));


// Task 0.10
function printCommonLetter(firstWord, secondWord) {

    let firstWordLower = firstWord.toLowerCase();
    let secondWordLower = secondWord.toLowerCase();

    let firstWordletters = Array.from(firstWordLower); 
    let commonLetters = "";

    for(i = 0; i < secondWordLower.length; i++) {
        if(firstWordletters.includes(secondWordLower[i])) {
            commonLetters += secondWordLower[i];
        } 
    }

    return commonLetters;
} 

console.log(printCommonLetter("Prinzt", "prinkz"));


