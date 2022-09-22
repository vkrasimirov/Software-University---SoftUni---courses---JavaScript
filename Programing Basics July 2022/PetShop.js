function petShop(input){
    let side = Number(input[0])
    let side2 = Number(input[1])
    let dogs = 2.50
    let cats = 4
    let area = dogs * side
    let area2 = cats * side2
    let area3 = area + area2
    let result = `${area3} lv.`
    console.log(result)
}

petShop (["5","4"])
