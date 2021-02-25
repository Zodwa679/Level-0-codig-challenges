function  convertNumberTime(number){

    let minutes = number % 60;
    let hours = (number - minutes )/60 ;

    let minutepluralCheck = minutes == 1 ? "minute" : "minutes"; 
    let hourPluralCheck = hours == 1 ? "hour " : "hours ";

    let minuteText = minutes + ' ' + minutepluralCheck;
    let hourText = hours + ' ' + hourPluralCheck;

    if(hours == 0) {
         return hourText + minuteText; 
    }
    else {
        return minutes >= 0 ? hourText + minuteText : hourText; 
    }
}
    
console.log(convertNumberTime(60));
