function fruitShop(input){
    let fruit = input[0]
    let day = input[1]
    let quantity = Number(input[2])
    let sum = 0
   
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
      if (fruit === "banana"){
        sum = quantity * 2.50
      } else if (fruit === "apple"){
        sum = quantity * 1.20
      } else if (fruit === "orange"){
        sum = quantity * 0.85
      } else if (fruit === "grapefruit"){
        sum = quantity * 1.45
      } else if (fruit === "kiwi"){
        sum = quantity * 2.70
      } else if (fruit === "pineapple"){
        sum = quantity * 5.50
      } else if (fruit === "grapes"){
        sum = quantity * 3.85
      }
    } else if (day === "Saturday" || day === "Sunday"){
      if (fruit === "banana"){
        sum = quantity * 2.70
      } else if (fruit === "apple"){
        sum = quantity * 1.25
      } else if (fruit === "orange"){
        sum = quantity * 0.90
      } else if (fruit === "grapefruit"){
        sum = quantity * 1.60
      } else if (fruit === "kiwi"){
        sum = quantity * 3.00
      } else if (fruit === "pineapple"){
        sum = quantity * 5.60
      } else if (fruit === "grapes"){
        sum = quantity * 4.20
      }
    }
    if (sum != 0){ 
    console.log(sum.toFixed(2)) 
    } else { 
    console.log("error")
    }
}

fruitShop(["apple","Tuesday","2"])