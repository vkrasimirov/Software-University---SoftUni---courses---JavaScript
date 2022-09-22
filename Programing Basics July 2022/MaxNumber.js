function maxNum(input){
    let i = 0
    let command = input[i]

    let maxNum = Number.MIN_SAFE_INTEGER

    while(command !== "Stop"){
        let num = Number(command)

        if(num > maxNum){
            maxNum = num
        }

        command = input[i]
        i++
    }
    console.log(maxNum);
}

maxNum(["100",

"99",

"80",

"70",

"Stop"])