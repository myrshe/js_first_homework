function isPalindrom(x) {
    if (x < 0) {
        return false;
    }
    const number = x.toString();

    function checkNumber(index) {
        if (index > number.length / 2) {
            return true;
        }
        if (number[index] !== number[number.length - 1 -index]) {
            return false;
        }
        return checkNumber(index + 1)
    }
    return(checkNumber(0));
}

console.log(isPalindrom(121));
console.log(isPalindrom(-121));
console.log(isPalindrom(10));
