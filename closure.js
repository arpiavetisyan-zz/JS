function makeAdder(x) {

    function add(y) {
        return x + y
    };
    return add;
}

var plusOne = makeAdder(1)

var plusTen = makeAdder(10)

plusOne(3)
plusTen(13)