function godzillaVsKong(input){
    let budget = Number(input[0])
    let numExtras = Number(input[1])
    let suit = Number(input[2])

    let decor = 0.10 * budget
    let suitGet = numExtras * suit
    let totalFilmPrice = decor + suitGet

    if (numExtras > 150) {
        suitGet = 0.10 * suitGet
        totalFilmPrice = totalFilmPrice - suitGet
    }

    if (totalFilmPrice > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalFilmPrice - budget).toFixed(2)} leva more.`)
    } else if (totalFilmPrice <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalFilmPrice).toFixed(2)} leva left.`)
    } 
}

godzillaVsKong(["20000","120","55.5"])
