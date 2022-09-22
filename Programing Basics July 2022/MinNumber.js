function minNumber(input){
    let i = 0
    let command = input[i]
    
    let minNum = Number.MAX_SAFE_INTEGER

    while(command !== "Stop"){
        let num = Number(command)

        if(num < minNum){
            minNum = num
        }

        command = input[i]
        i++
    }
    console.log(minNum)
}

minNumber(["100",

"99",

"80",

"70",

"Stop"])

