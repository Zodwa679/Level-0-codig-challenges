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