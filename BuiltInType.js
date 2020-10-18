// const accessory_price = 9.99;

// var bank_balance = 302.12;
// var amount = 99.9;

// amount = amount * 2;

// if (amount < bank_balance) {
//     console.log("I will take the accessory.")
//     amount = amount + accessory_price;
// } else {
//     console.log("No, thank you.")
// }

// console.log(amount.toFixed(2))

// var i = 0;

// while (true) {
//     if ((i <= 9) === false) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// function printAmount() {
//     console.log(amount.toFixed(2));
// }
// var amount = 12.97;
// amount = amount * 2;
// printAmount();

// const tax_rate = 0.08;

// function calculateFinalPurchaseAmount(amt) {
//     amt = amt + (amt * tax_rate);
//     return amt;
// }

// var amount = 10.99;
// amount = calculateFinalPurchaseAmount(amount);
// console.log(amount.toFixed(2))

// function one() {
//     var a = 1;
//     console.log(a);
// }

// function two() {
//     var a = 2;
//     console.log(a);
// }

// one()
// two()

// function outer() {
//     var a = 1;

//     function inner() {
//         var b = 2;

//         console.log(a + b);
//     }
//     inner();
//     console.log(a);
// }
// outer()

// const tax_rate = 0.08;

// function calculateFinalPurchaseAmount(amt) {
//     amt = amt + (amt * tax_rate);

//     return amt;

// }
// calculateFinalPurchaseAmount()

// const spendig_threshold = 200;
// const tax_rate = 0.08;
// const phone_price = 99.99;
// const accessory_price = 9.99;

// var bank_balance = 303.91;
// var amount = 0;

// function calculateTax(amount) {
//     return amount * tax_rate;
// }

// function formatAmount(amount) {
//     return "$" + amount.toFixed(2)
// }

// while (amount < bank_balance) {
//     amount = amount + phone_price;

//     if (amount < spendig_threshold) {
//         amount = amount + accessory_price;
//     }
// }

// amount = amount + calculateTax(amount);

// console.log("Your purchase: " + formatAmount(amount));

// if (amount > bank_balance) {
//     console.log("You can't afford this. :(");
// }