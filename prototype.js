var foo = {
    a: 42
}

var bar = Object.create(foo)

bar.b = "Hello, world"

bar.b
bar.a