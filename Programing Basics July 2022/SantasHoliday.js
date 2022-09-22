function holiday(input){
    let daysOfHoliday = Number(input[0])
    let whatRoom = input[1]
    let rating = input[2]

    let nights = daysOfHoliday - 1
    let price = 0

    if(whatRoom === "room for one person"){
        price = nights * 18
    } else if(whatRoom === "apartment"){
        price = nights * 25
        if(daysOfHoliday < 10){
            price = price - (0.25 * price)
        } else if(daysOfHoliday >= 10 && daysOfHoliday < 15){
            price = price - (0.35 * price)
        } else {
            price = price - (0.50 * price)
        }
    } else if(whatRoom === "president apartment"){
        price = nights * 35
        if(daysOfHoliday < 10){
            price = price - (0.10 * price)
        } else if(daysOfHoliday >= 10 && daysOfHoliday < 15){
            price = price - (0.15 * price)
        } else {
            price = price - (0.20 * price)
        }
    }

    if(rating === "positive"){
        price = (price * 0.25) + price
    } else {
        price = price - (price * 0.10)
    }

    console.log(price.toFixed(2))
}

holiday(["14",
"apartment",
"positive"])
