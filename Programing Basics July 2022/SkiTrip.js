function skiTrip(input){
    let days = Number(input[0])
    let roomType = input[1]
    let rating = input[2]

    let nights = days - 1
    //let pricePerNight = 0
    let totalPrice = 0

    switch (roomType){
        case ("room for one person"):
            //pricePerNight = 18;
            totalPrice = 18 * nights;
            break;
        case ("apartment"):
            //pricePerNight = 25;
            totalPrice = 25 * nights;
            if (nights < 10){
                totalPrice = 0.7 * totalPrice;
            } else if (nights >= 10 && nights <= 15){
                totalPrice = 0.65 * totalPrice;
            } else {
                totalPrice = 0.5 * totalPrice;
            }
            break;
        case ("president apartment"): 
            //pricePerNight = 35;
            totalPrice = 35 * nights;
            if (nights < 10){
                totalPrice = 0.9 * totalPrice;
            } else if (nights >= 10 && nights <= 15){
                totalPrice = 0.85 * totalPrice;
            } else {
                totalPrice = 0.8 * totalPrice;
            }
            break;
    }

    if (rating === "positive"){
        totalPrice = totalPrice * 1.25
    } else if (rating === "negative"){
        totalPrice = totalPrice * 0.9
    }

    console.log(totalPrice.toFixed(2))
}

skiTrip(["14","apartment","positive"])