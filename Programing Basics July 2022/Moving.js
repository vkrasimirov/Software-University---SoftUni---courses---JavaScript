function movie(input){
    let i = 0
    let width = Number(input[i])
    i++
    let length = Number(input[i])
    i++
    let height = Number(input[i])
    i++

    let totalVolume = width * length * height

    let command = input[i]
    i++

    while(command !== "Done"){
        let boxCount = Number(command)

        totalVolume -= boxCount
        if(totalVolume <= 0){
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`)
            break;
        }
        command = input[i]
    i++
    }
    if(command === "Done"){
        console.log(`${totalVolume} Cubic meters left.`)
    }
}

movie(["10",

"1",

"2",

"4",

"6",

"Done"])