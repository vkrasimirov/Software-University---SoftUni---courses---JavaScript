function Numbers100(input){
    let numbers = Number(input[0])

    if ( numbers < 100) {
        console.log("Less than 100")
    } else if ( numbers >= 100 && numbers <= 200) {
    console.log("Between 100 and 200")
    } else if ( numbers > 200) {
        console.log("Greater than 200")
    }
}

Numbers100([200])