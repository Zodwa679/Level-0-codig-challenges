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
    console.log('Hello' + ' ' + string + '!');

}
hello('Tshepo');

// Task 0.4
function evenOrOdd(number){
    if(number % 2 == 0){
        console.log('even')
    } else {
        console.log('odd');
    }
}
evenOrOdd(3);

// Task 0.5
function findTriangleArea(num1,num2,num3) {
var perimeter = (num1 + num2 + num3)/2;
var area = Math.sqrt(perimeter*((perimeter-num1)*(perimeter-num2)*(perimeter-num3))); //formula of a triangle wiht 3 knonwn sides.
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
    
console.log(convertNumberTime(133));

// Task 0.9
function printVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']; 
    let vowelsToPrint = "";

    for(var i = 0; i < string.length; i++) {
        if(vowels.includes(string[i].toLowerCase())) {
            vowelsToPrint += string[i];
        } 
    }

    console.log(vowelsToPrint);
} 

printVowels("Zoe");


// Task 0.10
function printCommonLetter(firstString, secondString) {

    let firstStringLower = firstString.toLowerCase();
    let secondStringLower = secondString.toLowerCase();

    let firstStringletters = Array.from(firstStringLower); 
    let commonLetters = "";

    

    for(i = 0; i < secondStringLower.length; i++) {
        if(firstStringletters.includes(secondStringLower[i])) {
            commonLetters += secondStringLower[i]
        } 
    }

    console.log(commonLetters);
} 

printCommonLetter("house", "computers");


