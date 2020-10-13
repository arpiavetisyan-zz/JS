const accessory_price = 9.99;

var bank_balance = 302.12;
var amount = 99.9;

amount = amount * 2;

if (amount < bank_balance) {
    console.log("I will take the accessory.")
    amount = amount + accessory_price;
} else {
    console.log("No, thank you.")
}

console.log(amount.toFixed(2))