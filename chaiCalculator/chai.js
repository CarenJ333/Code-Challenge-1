// function to calculate chai recipe
function calculateChaiIngredients(numberOfCups){
   numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

// The Standard Recipe for 1 Cup of Chai:
const waterPerCup = 200;
const milkPerCup = 50;
const teaLeavesPerCup = 1;//tablespoon
const sugar = 2;//teaspoon


// The totals for each
const totalWater = numberOfCups * waterPerCup;
const totalMilk = numberOfCups * milkPerCup;
const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
const totalSugar = numberOfCups * sugar;
// outputs
console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
console.log(`Water: ${totalWater} ml`);
console.log(`Milk: ${totalMilk} ml`);
console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)`);


console.log ("Enjoy your Chai Bora!");
}
calculateChaiIngredients();

