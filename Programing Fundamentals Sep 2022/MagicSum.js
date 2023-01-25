function magicSum(uniquePairs, num){
    let firstNum = 0
    let secondNum = 0

    for(let i = 0; i < uniquePairs.length - 1; i++){
        firstNum = Number(uniquePairs[i])
        for(let k = i + 1; k < uniquePairs.length + 1; k++){
            secondNum = Number(uniquePairs[k])
            if(firstNum + secondNum === num){
                console.log(`${firstNum} ${secondNum}`);
            }
            
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],27)