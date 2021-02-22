function  convertNumberTime(number){

    let minutes = number % 60;
    let hours = (number - minutes )/60 ;

    let hourPluralCheck = hours < 2 ? "hour " : "hours ";

    let minuteText = minutes + ' ' + 'minutes';
    let hourText = hours + ' ' + hourPluralCheck;

    if(hours == 0) {
         console.log(minuteText); 
    }
    else {
        console.log( minutes >= 0 ? hourText + minuteText : hourText);
    }
}
    
(convertNumberTime(60));
