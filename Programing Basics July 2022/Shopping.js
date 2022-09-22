function shopping(input){
    let budget = Number(input[0])
    let videocards = Number(input[1])
    let processor = Number(input[2])
    let ram = Number(input[3])
    let discount = 0

    let videocardsPrice = 250
    let NumberOfVideocards = videocards * videocardsPrice

    let processorPrice = 0.35 * NumberOfVideocards
    let ramPrice = 0.10 * NumberOfVideocards

    let finalProcessorPrice = processor * processorPrice
    let finalRamPrice = ram * ramPrice

    let Price = NumberOfVideocards + finalProcessorPrice + finalRamPrice
    
    if (videocards > processor) {
        discount = 0.15 * Price
    }

    let finalPrice = Price - discount

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`)
    } else if (finalPrice > budget) {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`)
    }
}

shopping(["900","2","1","3"])
//shopping(["920.45","3","1","1"])
