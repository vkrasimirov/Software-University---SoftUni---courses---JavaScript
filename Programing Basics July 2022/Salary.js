function salary(input){
    let openTabs = Number(input[0])
    let salary = Number(input[1])

    let lostMoney = 0

    for (let i = 1; i <= input.length; i++){
        if (input[i] === "Facebook"){
            lostMoney += 150
        } else if (input[i] === "Instagram"){
            lostMoney += 100
        } else if (input[i] === "Reddit"){
            lostMoney += 50
        }
    }

    if (lostMoney >= salary){
        console.log("You have lost your salary.");
    } else {
        console.log(salary - lostMoney)
    }
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
//salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])