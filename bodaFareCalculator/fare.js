function calculateBodaFare() {
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
    let distanceInKm = Number(input);

    const baseFare = 50;
    const chargePerKm = 15;
    const farecharge = chargePerKm * distanceInKm;
    const totalFare = baseFare + farecharge;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki : KES ${baseFare}`)
    console.log(`Mpaka Uko : KES ${farecharge}`);
    console.log(`Total: KES ${totalFare}`);

    console.log(`Panda Pikipiki!`)

}
calculateBodaFare();