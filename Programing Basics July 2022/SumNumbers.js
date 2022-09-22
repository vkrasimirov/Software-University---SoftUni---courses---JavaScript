function sumNums(input){
    let i = 0
    let n = Number(input[i])
    i++
    let sum = 0

    while (sum < n){
        let currentNumber = Number(input[i])
        i++
        sum += currentNumber
    }
    console.log(sum)
}

sumNums(["100", "10", "20", "30", "40"])