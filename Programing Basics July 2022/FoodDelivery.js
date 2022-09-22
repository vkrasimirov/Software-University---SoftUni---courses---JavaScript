function foodDelivery(input){
    let chicken = Number(input[0]) * 10.35
    let fish = Number(input[1]) * 12.40
    let vegan = Number(input[2]) * 8.15
    let delivery = 2.50
    let all = chicken + fish + vegan
    let deserts = all * 0.20
    let finish = all + deserts + delivery

    console.log(finish)
}

foodDelivery(["2","4","3"])
