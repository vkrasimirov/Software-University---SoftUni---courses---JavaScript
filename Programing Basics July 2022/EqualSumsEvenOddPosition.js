function equalSums(input){
    let num1 = Number(input[0])
    let num2 = Number(input[1])

    let result = ""

    for(let currentNum = num1; currentNum <= num2; currentNum++){
        let currentNumAsStr = currentNum.toString();
        let evenSum = 0
        let oddSum = 0

        for(let i = 0; i < currentNumAsStr.length; i++){
            let currentDigit = Number(currentNumAsStr[i])
            let position = i + 1

            if(position % 2 === 0){
                evenSum += currentDigit
            } else {
                oddSum += currentDigit
            }
        }
        if (evenSum === oddSum){
            result += `${currentNumAsStr} `
        }
    }
    console.log(result)
}

equalSums(["100000","100050"])