function palindroneIntigers (numArray){
    for(let i = 0; i < numArray.length; i++){
        let numAsString = numArray[i].toString()
        let reversedString = numAsString.split('').reverse().join('')

        if(numAsString === reversedString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindroneIntigers([123,323,421,121])