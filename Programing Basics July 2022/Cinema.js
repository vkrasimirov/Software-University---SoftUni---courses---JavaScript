function cinema(input){
    let projectionType = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])

    let totalTickets = rows * cols
    let income = 0

    switch (projectionType){
        case "Premiere":
            income = totalTickets * 12;
            break;
        case "Normal":
            income = totalTickets * 7.50;
            break;
        case "Discount":
            income = totalTickets * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Premiere","10","12"])