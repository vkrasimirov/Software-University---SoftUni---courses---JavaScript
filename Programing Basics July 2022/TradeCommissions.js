function tradeCommissions(input){
    let town = input[0]
    let sales = Number(input[1])
    let commissions = 0

    if (town === "Sofia"){
        if (sales > 0 && sales <= 500){
            commissions = 0.05
        } else if (sales > 500 && sales <= 1000){
            commissions = 0.07
        } else if (sales > 1000 && sales <= 10000){
            commissions = 0.08
        } else if (sales > 10000){
            commissions = 0.12
        }
} else if (town === "Varna"){
    if (sales > 0 && sales <= 500){
        commissions = 0.045
    } else if (sales > 500 && sales <= 1000){
        commissions = 0.075
    } else if (sales > 1000 && sales <= 10000){
        commissions = 0.10
    } else if (sales > 10000){
        commissions = 0.13
    }
} else if (town === "Plovdiv"){
    if (sales > 0 && sales <= 500){
        commissions = 0.055
    } else if (sales > 500 && sales <= 1000){
        commissions = 0.08
    } else if (sales > 1000 && sales <= 10000){
        commissions = 0.12
    } else if (sales > 10000){
        commissions = 0.145
    }
}

let sum = sales * commissions

if (sum > 0){
    console.log(sum.toFixed(2))
} else {
    console.log("error")
}

}

tradeCommissions(["Varna", "3874.50"])
//tradeCommissions(["Sofia","1500"])