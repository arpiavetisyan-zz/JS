function foo() {
    return 42;
}

foo.bar = "Hello world";

console.log(typeof foo)
console.log(typeof foo())
console.log(typeof foo.bar)