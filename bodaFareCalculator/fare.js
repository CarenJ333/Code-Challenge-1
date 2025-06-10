const readline = require('readline');

// 1. Define the function
function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // in KES
  const chargePerKm = 15; // in KES

  const standardPrice = distanceInKm * chargePerKm;
  const totalFare = baseFare + standardPrice;

  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${standardPrice}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// 2. Prompt the user and 3. Call the function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function (input) {
  const distanceInKm = parseFloat(input);
  calculateBodaFare(distanceInKm);

  rl.close();
});
