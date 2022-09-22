function WorldSwimmingRecord(input){
    let record = Number(input[0])
    let distance = Number(input[1])
    let secForOneM = Number(input[2])

    let time = distance * secForOneM
    let slow = (Math.floor(distance / 15)) * 12.5
    let totalTime = time + slow

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else if (totalTime >= record) {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }
}

WorldSwimmingRecord(["55555.67","3017","5.03"])
//WorldSwimmingRecord(["10464","1500","20"])
