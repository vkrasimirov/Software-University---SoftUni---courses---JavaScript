function fishingBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let countFisherman = Number(input[2])

    let ship = 0

    //"Spring", "Summer", "Autumn", "Winter"
    if (season === "Spring"){
        ship = 3000
    } else if (season === "Summer" || season === "Autumn"){
        ship = 4200
    } else if (season === "Winter"){
        ship = 2600
    }

    if (countFisherman <= 6){
        ship = 0.9 * ship
    } else if (countFisherman >= 7 && countFisherman <= 11){
        ship = 0.85 * ship
    } else if (countFisherman >= 12){
        ship = 0.75 * ship
    }

    if (season === "Spring" || season === "Summer" || season === "Winter" && season !== "Autumn"){
        if (countFisherman % 2 === 0){
            ship = ship - (0.05 * ship)
        }
    }

    if (budget >= ship){
        console.log(`Yes! You have ${(budget - ship).toFixed(2)} leva left.`)
    } else if (budget < ship){
        console.log(`Not enough money! You need ${(ship - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000","Summer","11"])
