function calculateBodaFare() {
    let distanceInKm = document.getElementById("kmInput").value;
    distanceInKm = Number(distanceInKm);

    const baseFare = 50;
    const chargePerKm = 15;
    const farecharge = chargePerKm * distanceInKm;
    const totalFare = baseFare + farecharge;

    document.getElementById("output").innerHTML = `
      <p>Unafika wapi Mkubwa? Kilometer ngapi? : ${distanceInKm} </p>
      <ul>
        <li>Uko kwote? Io ni ${distanceInKm} km: </li>
        <li>Ukikalia Pikipiki : KES ${baseFare} </li>
        <li>Mpaka Uko : KES ${farecharge} </li>
        <li>Total: KES ${totalFare} </li>
      </ul>
      <p>Panda Pikipiki! </p>
      
    `;
    

};