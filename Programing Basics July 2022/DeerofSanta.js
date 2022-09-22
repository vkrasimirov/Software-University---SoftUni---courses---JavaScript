function deerOfSanta(input){
    let daysNoSanta = Number(input[0])
    let kiloFood = Number(input[1])
    let firstDeerFood = Number(input[2])
    let secDeerFood = Number(input[3])
    let thDeerFood = Number(input[4])

    let firstDeer = daysNoSanta * firstDeerFood
    let secDeer = daysNoSanta * secDeerFood
    let thDeer = daysNoSanta * thDeerFood

    let all = firstDeer + secDeer + thDeer

    if(all <= kiloFood){
        console.log(`${Math.floor(kiloFood - all)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(all - kiloFood)} more kilos of food are needed.`)
    }

}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

