function jeweler (input){
    let arrWhite = input.shift().split(' ')
    let arrYellow = input.shift().split(' ')
    let length = arrWhite.length
    let laterUse = 0
    let result = 0

    for(let i = 0; i < length; i++){
        let firstElement = Number(arrWhite[i])
        let secondElement = Number(arrYellow[i])

        let sum = firstElement + secondElement

        while(sum > 10){
            secondElement = secondElement - 2

            sum = firstElement + secondElement
        }

        if(sum < 10){
            laterUse += sum
        }
        if(sum === 10){
            result += 1
        }
    }
    let addLater = Math.floor(laterUse / 10)
    result += addLater

    if(result >= 7){
        console.log(`Great success, you created ${result} earrings.`);
    } else {
        console.log(`Keep trying, you need ${7 - result} more earrings.`);
    }
}

jeweler(['2 7 8 5 1 6 1 7 5',  
'8 3 2 7 9 4 9 2 3']) 
