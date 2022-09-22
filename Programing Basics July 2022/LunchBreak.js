function lunchBreak(input){
    let movie = (input[0])
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchTime = (1 / 8) * breakDuration
    let freeTime = (1 / 4) * breakDuration

    let totalBusyTime = lunchTime + freeTime
    let timeLeft = breakDuration - totalBusyTime
    // let yesTime = timeLeft - episodeDuration
    // let noTime = episodeDuration - timeLeft

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones","60","96"])
