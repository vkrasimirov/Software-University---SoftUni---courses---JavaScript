function partyTime(input) {
    let vipList = []
    let regularList = []

    let currentGuess = input.shift()

    while (currentGuess !== 'PARTY') {
        const isVIP = !isNaN(currentGuess[0])

        if (isVIP) {
            vipList.push(currentGuess)
        } else {
            regularList.push(currentGuess)
        }

        currentGuess = input.shift()
    }

    let allGuest = vipList.concat(regularList)

    for (const guest of input) {
        allGuest.splice(allGuest.indexOf(guest), 1)
    }

    console.log(allGuest.length);
    allGuest.forEach(guest => console.log(guest))
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])