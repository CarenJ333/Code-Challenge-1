// function to estimation transaction fee
function estimateTransactionFee(amountToSend){
    amountToSend = parseFloat(prompt("Unatuma Ngapi?"));

 //calculate base fee
const baseFee = amountToSend * 0.015;

//calculate transaction fee 
let fee;
if (baseFee < 10){
    fee = 10;
}
else if (baseFee > 70){
    fee = 70;
}
else {
    fee = baseFee;
}

//calculate total
const total = amountToSend + fee;

//output
console.log(`Sending KES ${amountToSend}:`);
console.log(`Calculated Transaction Fee: KES ${fee}`);

console.log(`Total amount to be debited: KES ${total}`);

console.log(`Send Money Securely!`);

}
//calling function
estimateTransactionFee();

