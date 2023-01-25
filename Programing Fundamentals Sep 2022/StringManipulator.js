function stringManipulator(input){
    let myString = input.shift()

    let command = input.shift()

    while(command !== 'End'){
        let comandSplited = command.split(' ')
        switch (comandSplited.shift()) {
            case 'Translate':
                let char = comandSplited.shift()
                let replacement = comandSplited.shift()

            while(myString.includes(char)){
                myString = myString.replace(char,replacement)
            }
                //myString = myString.replaceAll(char,replacement)
                console.log(myString);
                break;
            case 'Includes':{
                let substr = comandSplited.shift()
                if(myString.includes(substr)){
                    console.log('True');
                } else {
                    console.log('False');
                }
            }
                break;
            case 'Start':
                let substr = comandSplited.shift()
                if(myString.startsWith(substr)){
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                myString = myString.toLowerCase()
                console.log(myString);
                break;
            case 'FindIndex':
                let index = comandSplited.shift()
                let lastIndex = Number(myString.lastIndexOf(index))
                console.log(lastIndex);
                break;
            case 'Remove':
                let first = comandSplited.shift()
                let last = comandSplited.shift()

                myString = [...myString]
                myString.splice(first, last)
                myString = myString.join('')
                console.log(myString);
                break;
        }
        command = input.shift()
    }
}

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])


