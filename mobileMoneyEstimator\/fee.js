function estimateTransactionFee() {
    let input = prompt("Unatuma Ngapi? (KES):");
    let amountToSend = Number(input);

    let transactionFee = 0.015 * amountToSend;
    let fee;
    if (transactionFee < 10) {
        fee = 10;
    }
    else if (transactionFee > 70) {
        fee = 70;
    }
    else {
        fee = transactionFee;
    }

    const totalDebited = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee : KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);

    console.log(`Send Money Securely!`);

}
estimateTransactionFee();