function charactersInRange (first,second){
    let rangeStart = Math.min(first.charCodeAt(),second.charCodeAt())
    let randeEnd = Math.max(first.charCodeAt(),second.charCodeAt())
    let resultString = ""
    //let charactersArray = []

    for(let currentChar = rangeStart + 1; currentChar < randeEnd; currentChar++){
        let singleChar = String.fromCharCode(currentChar)

        if(currentChar + 1 === randeEnd){
            resultString += `${singleChar}`
        } else {
            resultString += `${singleChar} `
        }
        //charactersArray.push(singleChar)
    }
    //console.log(charactersArray.join(' '))
    console.log(resultString);
}

charactersInRange('#',':')