function workout(input){
    let daysOfTraning = Number(input[0])
    let kilometarsOfDayOne = Number(input[1])

    let FORdays = daysOfTraning + 1
    let daysRunned = kilometarsOfDayOne
    let allkilometars = 0

    for(let i = 2; i <= FORdays; i++){
        let procentAdd = Number(input[i])
        procentAdd = procentAdd / 100

        daysRunned = (daysRunned * procentAdd) + daysRunned

        allkilometars += daysRunned
    }

    let finalKilometar = allkilometars + kilometarsOfDayOne

    if(finalKilometar >= 1000){
        console.log(`You've done a great job running ${Math.ceil(finalKilometar - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - finalKilometar)} more kilometers`)
    }

}

workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
