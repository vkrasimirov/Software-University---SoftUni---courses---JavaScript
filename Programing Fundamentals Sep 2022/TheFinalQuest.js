function theFinalQuest(input) {
    let text = input.shift()
    let lines = input.shift().split(' ')

    let textSplitted = text.split(' ')
    let command = lines.shift()

    while (command !== 'Stop') {

        switch (command) {
            case 'Delete': {
                let index = Number(lines.shift()) + 1
                let indexWord = textSplitted[index]
                text = text.replace(indexWord,'')
                break;
            }
            case 'Swap': {
                let wordForSwap = lines.shift()
                let wordGiven = lines.shift()
                text = text.replace(wordGiven, wordForSwap)
                break;
            }
            case 'Put': {
                let word = lines.shift()
                let index = Number(lines.shift()) - 1
                if (index === textSplitted.length) {
                    text.push(word)
                } else {
                    text = text.replace(textSplitted[index], word)
                }
                break;
            }
            case 'Sort':
                text = text
                break;
            case 'Replace':
                let wordForSwap = lines.shift()
                let wordGiven = lines.shift()
                text = text.replace(wordGiven, wordForSwap)
                break;
        }
        textSplitted = text.split(' ')
        lines = input.shift().split(' ')
        command = lines.shift()
    }
    console.log(text);
}

theFinalQuest(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"])
