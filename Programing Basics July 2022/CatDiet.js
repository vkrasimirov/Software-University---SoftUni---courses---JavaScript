function catDiet(input){
    let fats = Number(input[0])
    let protein = Number(input[1])
    let carbo = Number(input[2])
    let allCalories = Number(input[3])
    let waterProcent = Number(input[4])

    let allFats = fats / 100
    let totalFats = (allFats * allCalories) / 9
    let allprotein = protein / 100
    let totalprotein = (allprotein * allCalories) / 4
    let allcarbo = carbo / 100
    let totalcarbo = (allcarbo * allCalories) / 4

    let allWeight = totalFats + totalprotein + totalcarbo
    let calories = allCalories / allWeight

    let procent = 100 - waterProcent
    let procentFinal = procent / 100
    let calorieFinal = procentFinal * calories

    console.log(calorieFinal.toFixed(4))

}

catDiet(["60",
"25",
"15",
"2500",
"60"])
