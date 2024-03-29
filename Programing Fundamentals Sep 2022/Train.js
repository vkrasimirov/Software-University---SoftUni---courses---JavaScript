function train(arr){
    let passangersInTrain = arr.shift().split(' ').map(Number)
    let maxCapacity = Number(arr.shift())

    for(let i = 0; i < arr.length; i++){
        let currentRow = arr[i].split(' ')

        if(currentRow[0] === 'Add'){
            let newWagonPassangers = Number(currentRow[1])
            passangersInTrain.push(newWagonPassangers)
        } else {
            for(let j = 0; j < passangersInTrain.length; j++){
                let passangersInCurrentWagon = passangersInTrain[j]
                if(passangersInCurrentWagon + Number(currentRow[0]) <= maxCapacity){
                    passangersInTrain[j] += Number(currentRow[0])
                    break;
                }
            }
        }
    }
    console.log(passangersInTrain.join(' '));

}

train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])