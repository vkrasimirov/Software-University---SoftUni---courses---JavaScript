function journey(input){
    let budget = Number(input[0])
    let season = input[1]

    let sum = 0
    let location = ""
    let inWhat = ""

    if (budget <= 100){
        location = "Bulgaria"
        if (season === "summer"){
            sum = 0.7 * budget
        } else if (season === "winter"){
            sum = 0.3 * budget
        } console.log(`Somewhere in ${location}`)
    } else if (budget <= 1000){
        location = "Balkans"
        if (season === "summer"){
            sum = 0.6 * budget
        } else if (season === "winter"){
            sum = 0.2 * budget
        } console.log(`Somewhere in ${location}`)
    } else if (budget > 1000){
        location = "Europe"
        inWhat = "Hotel"
        sum = 0.1 * budget
        console.log(`Somewhere in ${location}`)
    }

    if (season === "summer" && budget <= 1000){
        inWhat = "Camp"
    } else if (season === "winter" && budget <= 1000){
        inWhat = "Hotel"
    }

    let rest = budget - sum

    console.log(`${inWhat} - ${(rest).toFixed(2)}`)

}

//journey(["50", "summer"])
journey(["1500", "summer"])
