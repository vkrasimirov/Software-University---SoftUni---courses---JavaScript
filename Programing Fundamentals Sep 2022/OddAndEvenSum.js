function oddAndEvenSum (num){
    let numAsString = num.toString()
    let evenSum = 0
    let oddSum = 0

    for(let i = 0; i < numAsString.length; i++){

        let singleNum = Number(numAsString[i])

        if(singleNum % 2 === 0){
            evenSum += singleNum
        } else {
            oddSum += singleNum
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)