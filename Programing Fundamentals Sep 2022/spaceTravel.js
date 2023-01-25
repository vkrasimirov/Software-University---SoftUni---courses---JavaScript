function spaceTravel(input){
    let route = input.shift().split('||')
    let startingAmountOfFuel = Number(input.shift())
    let startingAmountOfAmmunitions = Number(input.shift())
    let route2 = route.shift().split(' ')

    let command = route2.shift()
    let allLightYear = 0

    while(command !== 'Titan'){
        if(command === 'Travel'){
            let lightYear = Number(route2.shift())
            startingAmountOfFuel -= lightYear
            allLightYear += lightYear

            if(startingAmountOfFuel > allLightYear){
                console.log(`The spaceship travelled ${allLightYear} light-years.`);
            } else {
                console.log("Mission failed.");
                break;
            }
        }

        if(command === "Enemy"){
            let enemysArmour = Number(route2.shift())

            if(startingAmountOfAmmunitions >= enemysArmour){
                console.log(`An enemy with ${enemysArmour} armour is defeated.`);
                startingAmountOfAmmunitions -= enemysArmour
            } else if (startingAmountOfFuel >= enemysArmour * 2){
                startingAmountOfFuel -= enemysArmour * 2
                console.log(`An enemy with ${enemysArmour} armour is outmaneuvered.`);
            } else if(startingAmountOfFuel < enemysArmour * 2 || startingAmountOfAmmunitions < enemysArmour){
                console.log("Mission failed.");
                break;
            }

        }

        if(command === 'Repair'){
            let added = Number(route2.shift())
            startingAmountOfFuel += added
            startingAmountOfAmmunitions += added * 2

            console.log(`Ammunitions added: ${added * 2}.`);
            console.log(`Fuel added: ${added}.`);
        }

        route2 = route.shift().split(' ')
        command = route2.shift()
    }
    
    if(command === 'Titan'){
        console.log("You have reached Titan, all passengers are safe.");
    }
}

// spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
//     50,
//     80,
//     ])

spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    60,
    100])