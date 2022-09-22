function depositCalculator(input){
    let depositAmount = Number(input[0])
    let termDeposit = Number(input[1])
    let amount = Number(input[2])
    //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let yearDeposit = depositAmount * (amount / 100);
    //0.057
    let monthDeposit = yearDeposit / 12;

    let total = monthDeposit * termDeposit
    let totalMoney = total + depositAmount
    console.log(totalMoney)
}

depositCalculator(["200 ","3 ","5.7 "])
