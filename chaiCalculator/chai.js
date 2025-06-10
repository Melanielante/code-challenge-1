function calculateChaiIngredients() {
    let numberOfCups = document.getElementById("cupsInput").value;
    numberOfCups = Number(numberOfCups);

    let totalWater = 200 * numberOfCups;
    let totalMilk = 50 * numberOfCups;
    let totalTeaLeaves   = 1 *  numberOfCups;
    let totalSugar = 2 * numberOfCups;

    document.getElementById("output").innerHTML = `
     <p>To make ${numberOfCups} cups of Kenyan Chai, you will need: </p>
     <ul>
       <li>Water: ${totalWater} ml </li>
       <li>Milk: ${totalMilk} ml </li>
       <li>Tea Leaves (Majani): ${totalTeaLeaves} tablespoons </li>
       <li>Sugar (Sukari): ${totalSugar} teaspoons </li>
     </ul>
     
     <p>Enjoy your Chai Bora! </p>
    `;
    
    
}
calculateChaiIngredients();