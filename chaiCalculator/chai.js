function calculateChaiIngredients() {
    let input = prompt("Karibu! How many cups ofChai Bora would you like to make?");
    let numberOfCups = Number(input);

    let totalWater = 200 * numberOfCups;
    let totalMilk = 50 * numberOfCups;
    let totalTeaLeaves   = 1 *  numberOfCups;
    let totalSugar = 2 * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need: `);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);

    console.log(`Enjoy your Chai Bora!`);
}
calculateChaiIngredients();