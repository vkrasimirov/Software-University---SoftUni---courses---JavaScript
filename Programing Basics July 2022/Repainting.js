function repainting(input){
    let nailon = (Number(input[0]) + 2) * 1.50
    let paint = (Number (input[1]) + (input[1] * 0.1)) * 14.50 
    let raz = Number(input[2]) * 5
    let hours = Number(input[3])
    let bag = 0.40

    let total = nailon + bag + raz + paint
    let final = total + (total * 0.3) * hours

    console.log(final)
}

repainting(["10","11","4","8"])
