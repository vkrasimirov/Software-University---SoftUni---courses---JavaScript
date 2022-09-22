function newHouse(input){
    let flower = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    
    let sum = 0

    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    if (flower === "Roses"){
        sum = count * 5
        if (count > 80){
            sum = 0.9 * sum
        }
    } else if (flower === "Dahlias"){
        sum = count * 3.80
        if (count > 90){
            sum = 0.85 * sum
        }
    } else if (flower === "Tulips"){
        sum = count * 2.80
        if (count > 80){
            sum = 0.85 * sum
        }
    } else if (flower === "Narcissus"){
        sum = count * 3
        if (count < 120){
            sum = 1.15 * sum
        }
    } else if (flower === "Gladiolus"){
        sum = count * 2.50
        if (count < 80){
            sum = 1.20 * sum
        }
    }

    if (budget >= sum){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - sum).toFixed(2)} leva left.`)
    } else if (budget < sum){
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Tulips","88","260"])
