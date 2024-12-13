function convertingRomanNumerals(line){
    romanMap = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    finalNumber = 0;

    for (char of line) {
        value = romanMap[char];
        if(romanMap[line[line.indexOf(char) + 1]] > value) {
            finalNumber-=value;
        } else {
            finalNumber+=value;
        }
    }
    return finalNumber;
}

console.log(convertingRomanNumerals('III'));
console.log(convertingRomanNumerals('LVIII'));
console.log(convertingRomanNumerals('MCMXCIV'));

