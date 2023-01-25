function replaceRepeatingChars (input){
    let result = input[0]

    for(let i = 1; i < input.length; i++){
        if(input[i] !== input[i - 1]){
            result += input[i]
        }
    }

    console.log(result);

    // or...
    // for(let i = 1; i < input.length; i++){
    //     const current = input[i]
    //     const prev = input[i - 1]

    //     if(current !== prev){
    //         result += current
    //     }
    // }
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')