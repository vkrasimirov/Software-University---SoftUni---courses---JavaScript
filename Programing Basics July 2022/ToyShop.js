function toyShop(input){
    let hollidayPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let talkDollCount = Number(input[2])
    let flushBearCount = Number(input[3])
    let minionCount = Number(input[4])
    let truckCount = Number(input[5])
    let discount = 0

    let puzzleCountPrice = puzzleCount * 2.60
    let talkDollPrice = talkDollCount * 3
    let flushBearPrice = flushBearCount * 4.10
    let minionPrice = minionCount * 8.20
    let truckPrice = truckCount * 2

    let totalPrice = puzzleCountPrice + talkDollPrice + flushBearPrice + minionPrice + truckPrice
    let totalCount = puzzleCount + talkDollCount + flushBearCount + minionCount + truckCount
    
    if (totalCount >= 50) {
        discount = 0.25 * totalPrice
        totalPrice = totalPrice - discount
    }

    let rent = 0.10 * totalPrice
    totalPrice = totalPrice - rent

    if (totalPrice >= hollidayPrice) {
        console.log(`Yes! ${(totalPrice - hollidayPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(hollidayPrice - totalPrice).toFixed(2)} lv needed.`)
    }

}

toyShop(["40.8","20","25","30","50","10"])