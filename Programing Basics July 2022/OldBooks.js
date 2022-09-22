function oldBooks(input){
    let index = 0
    let searchBook = input[index]
    index++

    let command = input[index]
    index++

    let booksCheked = 0

    while(command !== "No More Books"){

        if(command === searchBook){
            console.log(`You checked ${booksCheked} books and found it.`);
            return;  //break;
        }
        booksCheked++

        command = input[index]
        index++
    }
    // за break - if(command === "No More Books"){}
    console.log("The book you search is not here!")
    console.log(`You checked ${booksCheked} books.`)

}

oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])