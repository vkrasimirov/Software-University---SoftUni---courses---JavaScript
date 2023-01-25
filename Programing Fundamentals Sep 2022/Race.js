function rece(raceDataArr){
    let raceArr = raceDataArr.shift().split(', ')
    let raceObject = {}
    const patternName = /[A-Za-z]+/g
    const patternDistance = /[0-9]+/g

    let command = raceDataArr.shift()
    while(command !== 'end of race'){
        const currentName = command.match(patternName).join('')
        const currentDistance = command.match(patternDistance).join('')

        if(raceArr.includes(currentName)){
        let distance = 0

        for (const digit of currentDistance) {
            distance += Number(digit)
        }

        if(!raceObject.hasOwnProperty(currentName)){
            raceObject[currentName] = distance
        } else {
            raceObject[currentName] += distance
        }
        }

        command = raceDataArr.shift()
    }
    let sortedRacers = Object.entries(raceObject).sort((a,b)=> b[1]-a[1])
    const first = sortedRacers[0][0]
    const second = sortedRacers [1][0]
    const third = sortedRacers[2][0]

    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);

}

rece(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])
