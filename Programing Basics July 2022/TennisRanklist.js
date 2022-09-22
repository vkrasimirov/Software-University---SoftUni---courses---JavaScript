function tennisRanklist(input){
    let tournamentsCount = Number(input[0])
    let startingPoints = Number(input[1])

    let pWon = 0
    let tournamentsWon = 0

    for (let i = 2; i < tournamentsCount + 2; i++){
        let currentResult = input[i]
        if (currentResult === "W"){
        pWon += 2000
        //pWon = pWon + 2000
        tournamentsWon += 1
        } else if (currentResult === "F"){
        pWon += 1200
        } else if (currentResult === "SF"){
        pWon += 720
        }
    }

    let finalPoints = startingPoints + pWon
    console.log(`Final points: ${finalPoints}`)
    
    let avaragePoints = pWon / tournamentsCount
    console.log(`Average points: ${Math.floor(avaragePoints)}`)

    let percentWon = (tournamentsWon / tournamentsCount) * 100
    console.log(`${percentWon.toFixed(2)}%`)

}

tennisRanklist(["5","1400","F","SF","W","W","SF"])