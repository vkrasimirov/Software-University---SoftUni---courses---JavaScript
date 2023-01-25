function stringSubstring (word, text){
    const tokens = text.split(' ')

    for (const token of tokens) {
        if(word.toLowerCase() === token.toLowerCase()){ // or toLocaleLowerCase()
            return console.log(word)
        }
    }
    console.log(`${word} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language')