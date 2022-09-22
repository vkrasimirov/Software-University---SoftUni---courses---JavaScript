function timeMinutes(input){
    let hour = Number(input[0])
    let min = Number(input[1])

    let hoursInMinutes = Math.floor(hour * 60)
    let totalMin = hoursInMinutes + min + 15

    let hours = Math.floor(totalMin / 60)
    let minutes = totalMin % 60

    if (hours === 24){
        hours = 00
    }
    
    if (minutes < 10){
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }
}

timeMinutes(["1","46"])