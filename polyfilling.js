function(!Number.isNaN) {
    Number.isNan = function isNaN(x) {
        return x !== x
    }
}