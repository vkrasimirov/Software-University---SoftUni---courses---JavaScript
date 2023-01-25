function equalSum (arr){
    let foundI = 'no'

    for(let i = 0; i < arr.length; i++){
        let leftSum = 0
        let rightSum = 0
    //calc left sum
        for(let l = 0; l < i; l++){
            leftSum = leftSum + arr[l]
        }
    //calc right sum
        for(let r = i + 1; r < arr.length; r++){
            rightSum = rightSum + arr[r]
        }

        if(leftSum === rightSum){
            foundI = i
        }
    }

    console.log(foundI);
}

equalSum([1, 2, 3, 3])