// function to calculate boda fare
function calculateBodaFare(distanceInKm){
    distanceInKm = parseInt(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

 // standard price
const baseFare = 50; //in ksh
const chargePerKm = 15; //in ksh

//Calculate total distance
const standardPrice = distanceInKm * chargePerKm;
const totalFare = baseFare + (distanceInKm * chargePerKm);

// output
console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
console.log(`Mpaka Uko: KES ${standardPrice}`);
console.log(`Total: KES ${totalFare}`);

console.log("Panda Pikipiki!")
}
// calling function calculate
calculateBodaFare();