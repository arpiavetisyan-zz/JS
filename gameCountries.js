let points = 0;

let resp0 = prompt("What is the capital of Armenia?");

if (resp0 === "Yerevan") {
    points += 1;
}

let resp1 = prompt("What is the capital of Russia?")

if (resp1 === "Moscow") {
    points += 1;
}

let resp2 = prompt("What is the capital of France?")

if (resp2 === "Paris") {
    points += 1;
}

console.log(points)