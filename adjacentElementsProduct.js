function adjacentElementsProduct(inputArray) {
    let a = Number.NEGATIVE_INFINITY
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i - 1] > a) {
            a = inputArray[i] * inputArray[i - 1];
        }
    }
    return a;
}