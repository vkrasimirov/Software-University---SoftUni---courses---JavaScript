function passValidator (pass){
    let digitCounter = 0
    let passLength = pass.length
    let isSymbol = false

    for(let i = 0; i < passLength; i++){
        let charNum = pass[i].charCodeAt()
        let isDigit = charNum >= 48 && charNum <= 57
        let isSmallLetter = charNum >= 97 && charNum <= 122
        let isBigLetter = charNum >= 65 && charNum <= 90
        
        if(isDigit){
            digitCounter++
        }
        
        if(!isDigit && !isSmallLetter && !isBigLetter){
            isSymbol = true
        }
    }

    if(pass.length < 6 || pass.length > 10){
        console.log("Password must be between 6 and 10 characters");
    }
    if(isSymbol){
        console.log("Password must consist only of letters and digits");
    }
    if(digitCounter < 2){
        console.log("Password must have at least 2 digits");
    }
    if(digitCounter >= 2 && !isSymbol && (pass.length >= 6 || pass.length <= 10)){
        console.log("Password is valid");
    }
    
}
passValidator('logIn')