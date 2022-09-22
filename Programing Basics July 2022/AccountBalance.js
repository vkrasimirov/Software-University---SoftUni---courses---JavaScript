function accountBalance(input){
    let i = 0
    let account = 0

    let command = input[i]
    i++

    while (command !== "NoMoreMoney"){
        let money = Number(command)
        if (money < 0 ){
            console.log("Invalid operation!");
            break;
        }
        account += money
        console.log(`Increase: ${money.toFixed(2)}`)

        command = input[i]
        i++
    }
    console.log(`Total: ${account.toFixed(2)}`)
}

accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])