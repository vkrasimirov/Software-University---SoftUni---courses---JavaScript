function password(input){
    let i = 0
    let username = input[i]
    i++
    let password = input[i]
    i++
    let currentPass = input[i]
    i++

    while (password !== currentPass){
        currentPass = input[i]
        i++
    }
    console.log(`Welcome ${username}!`)
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])