const readline = require('readline');

// Define the function
function calculateBodaFare(distanceInKm) {
// standard price
  const baseFare = 50; // in KES
  const chargePerKm = 15; // in KES
// calculate total distance
  const standardPrice = distanceInKm * chargePerKm;
  const totalFare = baseFare + standardPrice;

// output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${standardPrice}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Prompt the user and Call the function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function (input) {
  const distanceInKm = parseFloat(input);
  calculateBodaFare(distanceInKm);

  rl.close();
});
