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

    return commonLetters;
} 
printCommonLetter('house','computers');