function sorting(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    let resultArr = []

    for(let i = 0; i < sortedArr.length; i++){
        let lastElement = sortedArr.pop()
        let firstElement = sortedArr.shift()

        resultArr.push(lastElement)
        resultArr.push(firstElement)
    }
    resultArr.push(sortedArr.pop())
    resultArr.push(sortedArr.shift())

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])