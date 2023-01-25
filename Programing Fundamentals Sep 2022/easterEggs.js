function easterEggs(input){
    let pattern = /([@#]+)(?<color>[a-z]{3,})([@#]+)([\D\W\/]+)(?<amount>[\d]+)([\/]+)/gm
    let exec = pattern.exec(input)
    
    while(exec){
        console.log(`You found ${exec.groups['amount']} ${exec.groups['color']} eggs!`);

        exec = pattern.exec(input)
    }

    

}

easterEggs('#@##@red@#/8/@rEd@/2/#@purple@////10/')