function mengeArrays (first, second){
    let resultArray = []

    for(let i = 0; i < first.length; i++){
        if(i % 2 === 0){
            resultArray.push(Number(first[i]) + Number(second[i]))
        } else {
            resultArray.push(first[i] + second[i])
        }
    }
    console.log(resultArray.join(' - '));
}

mengeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])