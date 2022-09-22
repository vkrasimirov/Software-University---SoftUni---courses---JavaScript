function yardGreening(input){
    let sm = 7.61
    let save = 0.18
    let side = Number(input[0])
    let result = side * sm
    let discount = 0.18 * result
    let finalPrice = result - discount
    let final = `The final price is: ${finalPrice} lv.`
    let dis = `The discount is: ${discount} lv.`

    console.log(final)
    console.log(dis)
}

yardGreening(["550"])
