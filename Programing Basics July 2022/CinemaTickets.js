function cinemaTickets(input){
    let i = 0
    let moveName = input[i]
    i++

    let studentTCount = 0
    let standartTCount = 0
    let kidTCount = 0

    while(moveName !== "Finish"){
        let freeSpaces = Number(input[i])
        i++

        let ticketType = input[i]
        i++

        let spacesTaken = 0

        while(ticketType !== "End"){
            spacesTaken++

            if (ticketType === "student"){
                studentTCount += 1
            } else if (ticketType === "standard"){
                standartTCount += 1
            } else {
                kidTCount += 1
            }
            if (spacesTaken === freeSpaces){
                break;
            }

            ticketType = input[i]
            i++
        }

        let spacesTakenProcent = (spacesTaken / freeSpaces) * 100

        console.log(`${moveName} - ${(spacesTakenProcent).toFixed(2)}% full.`)

        moveName = input[i]
        i++
    }

    let totalTicketsCount = studentTCount + standartTCount + kidTCount
    let studetntsTpercent = (studentTCount / totalTicketsCount * 100).toFixed(2)
    let standartTCountPercent = (standartTCount / totalTicketsCount * 100).toFixed(2)
    let kidTCountPercent = (kidTCount / totalTicketsCount * 100).toFixed(2)

    console.log(`Total tickets: ${totalTicketsCount}`)
    console.log(`${studetntsTpercent}% student tickets.`)
    console.log(`${standartTCountPercent}% standard tickets.`)
    console.log(`${kidTCountPercent}% kids tickets.`)
}

cinemaTickets(["The Matrix",
                "20",
                "student",
                "standard",
                "kid",
                "kid",
                "student",
                "student",
                "standard",
                "student",
                "End",
                "The Green Mile",
                "17",
                "student",
                "standard",
                "standard",
                "student",
                "standard",
                "student",
                "End",
                "Amadeus",
                "3",
                "standard",
                "standard",
                "standard",
                "Finish"])