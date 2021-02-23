function  convertNumberTime(number){

    let minutes = number % 60;
    let hours = (number - minutes )/60 ;

    let minutepluralCheck = minutes == 1 ? "munite" : "munites"; 
    let hourPluralCheck = hours == 1 ? "hour " : "hours ";

    let muniteText = minutes + ' ' + minutepluralCheck;
    let hourText = hours + ' ' + hourPluralCheck;

    if(hours == 0) {
         return hourText + muniteText; 
    }
    else {
        return minutes >= 0 ? hourText + muniteText : hourText; 
    }
}
    
console.log(convertNumberTime(60));
