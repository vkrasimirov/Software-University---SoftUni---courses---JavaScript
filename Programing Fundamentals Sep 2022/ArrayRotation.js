function arrayRotation (arrayToRotate, rotations){
    for(let i = 0; i < rotations; i++){
        let numberToMove = arrayToRotate.shift()
        arrayToRotate.push(numberToMove)
    }

    console.log(arrayToRotate.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)