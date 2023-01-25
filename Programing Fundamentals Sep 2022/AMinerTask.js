function aMinerTask(input) {
    let colection = {}

    for (let i = 0; i < input.length; i += 2){
        const resource = input[i]
        const quantity = Number(input[i + 1])

        if(!colection.hasOwnProperty(resource)){
            colection[resource] = 0
        }

        colection[resource] += quantity
    }

    for (const item in colection) {
        console.log(`${item} -> ${colection[item]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])