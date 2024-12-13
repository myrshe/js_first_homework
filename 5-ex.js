function checkValidity(s) {
    const staples = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    const finalArr = [];

    for (let char of s) {
        if (char in staples) {
            if (finalArr.length === 0 || finalArr.pop() !== staples[char]) {
                return false;
            }
        } else {
            finalArr.push(char);
        }
    }
    if (finalArr.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkValidity("()"));
console.log(checkValidity('()[]{}'));
console.log(checkValidity('(]'));
console.log(checkValidity('([])'));


