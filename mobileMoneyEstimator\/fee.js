function estimateTransactionFee() {
    let amountToSend = document.getElementById("amountInput").value;
    amountToSend = Number(amountToSend);

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

    document.getElementById("output").innerHTML = `
      <p>Unatuma Ngapi? (KES): ${amountToSend} </p>
      <ul>
        <li>Sending KES ${amountToSend}: </li>
        <li>Calculated Transaction Fee : KES ${fee} </li>
        <li>Total amount to be debited: KES ${totalDebited} </li>
      </ul>

      <p>Send Money Securely! </p>

    `;
}
