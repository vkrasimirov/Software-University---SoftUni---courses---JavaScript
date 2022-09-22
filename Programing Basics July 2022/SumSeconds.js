function sumSeconds(input){
    let sec1 = Number(input[0])
    let sec2 = Number(input[1])
    let sec3 = Number(input[2])

    let totalSeconds = sec1 + sec2 + sec3
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSeconds(["35", "45", "44"])
// sumSeconds(["22", "7", "34"])
// sumSeconds(["50", "50", "49"])
// sumSeconds(["14", "12", "10"])