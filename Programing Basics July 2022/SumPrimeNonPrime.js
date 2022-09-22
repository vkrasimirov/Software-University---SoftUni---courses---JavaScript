function sumPrime(input){
    let i = 0

    let command = input[i]
    i++

    let sumPrimeNums = 0
    let nonPrimeSum = 0

    while(command !== "stop"){
        let num = Number(command)

        if(num < 0){
            console.log("Number is negative.")

            command = input[i]
            i++
            continue;
        }

        let isPrime = true

        for(let divider = 2; divider < num; divider++){
            if(num % divider === 0){
                isPrime = false
                break;
            }
        }
        if(isPrime === true){
            sumPrimeNums += num
        } else {
            nonPrimeSum += num
        }

        command = input[i]
        i++
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}

sumPrime(["3","9","0","7","19","4","stop"])