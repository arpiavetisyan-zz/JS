function checkPalindrome(inputString) {
    let s = inputString.split("").reverse().join("")

    return s === inputString;

}