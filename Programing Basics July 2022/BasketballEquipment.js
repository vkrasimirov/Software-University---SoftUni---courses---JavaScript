function basketballEquipment(input){
    let yearTax = Number(input[0])
    let shoes = yearTax - (yearTax * 0.40)
    let kit = shoes - (shoes * 0.20)
    let ball = kit / 4
    let accesories = ball / 5

    let total = yearTax + shoes + kit + ball + accesories
    console.log(total)
}

basketballEquipment(["365"])
