allLongestStrings = (inputArray) => {
    return inputArray.sort((a, b) => b.length - a.length)
        .filter(m => m.length == inputArray[0].length)
}