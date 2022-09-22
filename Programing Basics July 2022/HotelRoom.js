function hotelRoom(input){
    let month = input[0]
    let numberOfNights = Number(input[1])

    let studio = 0
    let apartment = 0
    //May, June, July, August, September или October
    if (month === "May" || month === "October"){
        studio = 50 * numberOfNights
        apartment = 65 * numberOfNights
        if (numberOfNights > 14){
            apartment = 0.90 * apartment
        }
        if (numberOfNights > 7 && numberOfNights <= 14){
            studio = 0.95 * studio
        } else if (numberOfNights > 14){
            studio = 0.70 * studio
        } console.log(`Apartment: ${(apartment).toFixed(2)} lv.`)
        console.log(`Studio: ${(studio).toFixed(2)} lv.`)
    } else if (month === "June" || month === "September"){
        studio = 75.20 * numberOfNights
        apartment = 68.70 * numberOfNights
        if (numberOfNights > 14){
            apartment = 0.90 * apartment
        }
        if (numberOfNights > 14){
            studio = 0.80 * studio
        } console.log(`Apartment: ${(apartment).toFixed(2)} lv.`)
        console.log(`Studio: ${(studio).toFixed(2)} lv.`)
    } else if (month === "July" || month === "August"){
        studio = 76 * numberOfNights
        apartment = 77 * numberOfNights
        if (numberOfNights > 14){
            apartment = 0.90 * apartment
        }
        console.log(`Apartment: ${(apartment).toFixed(2)} lv.`)
        console.log(`Studio: ${(studio).toFixed(2)} lv.`)
    } 

}

//hotelRoom(["May","15"])
hotelRoom(["August", "20"])
