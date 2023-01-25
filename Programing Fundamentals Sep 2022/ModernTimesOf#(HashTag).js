function modernTimesOfHashTags(string){
    const words = string.split(' ')

    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1
        if(isValidWord){
            let isLatter = true
            let wordCopy = ''
            for(let i = 1; i < word.length; i++){ 
                const char = word[i].toLowerCase()
                if(char.charCodeAt() < 97 || char.charCodeAt() > 122){
                    isLatter = false
                    break;
                } else {
                    wordCopy += word[i]
                }
            }
            if(isLatter){
                console.log(wordCopy);
            }
        }
    });
}

modernTimesOfHashTags('Nowadays everyone uses # to tag a #special word in #socialMedia')