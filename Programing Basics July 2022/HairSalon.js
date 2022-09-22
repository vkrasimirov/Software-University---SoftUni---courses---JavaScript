function hairSalon(input){
    let i = 0
    let goal = Number(input[i])
    i++
    let command = input[i]
    i++
    let sum = 0

    while(command !== "closed"){

        if(command === "haircut"){
            command = input[i]
            i++
            if(command === "mens"){
                sum += 15
            } else if (command === "ladies"){
                sum += 20
            } else if (command === "kids"){
                sum += 10
            }
        } else if(command === "color"){
            command = input[i]
            i++
            if(command === "touch up"){
                sum += 20
            } else if(command === "full color"){
                sum += 30
            }
        }

        if(sum >= goal){
            console.log(`You have reached your target for the day!`)
            console.log(`Earned money: ${sum}lv.`)
            break;
        }

        command = input[i]
        i++
    }

    if(sum < goal){
        console.log(`Target not reached! You need ${goal - sum}lv. more.`)
        console.log(`Earned money: ${sum}lv.`)
    }
}

hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

