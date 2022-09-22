function cleverLily(input){
    let age = Number(input[0])
    let wm = Number(input[1])
    let toyPrice = Number(input[2])

    let money = 0
    let toy = 0
    let moneyGiven = 0
    let moneyYear = 0

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            moneyYear += 1
            moneyGiven += 10
            money += moneyGiven
        } else {
            toy += 1
        }
    }

    let moneyFromToy = toyPrice * toy
    let getMoney = moneyYear
    let allMoney = money + moneyFromToy - getMoney

    if (allMoney >= wm){
        console.log(`Yes! ${(allMoney - wm).toFixed(2)}`)
    } else if (allMoney < wm){
        console.log(`No! ${(wm - allMoney).toFixed(2)}`)
    }
}


cleverLily(["21","1570.98","3"])