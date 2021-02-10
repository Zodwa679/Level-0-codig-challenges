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