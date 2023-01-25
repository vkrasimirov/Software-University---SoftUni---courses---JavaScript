function googleSearches(input) {
    let income = Number(input.shift())
    let users = Number(input.shift())
    let totalMoney = 0

    for (let i = 0; i < users; i++) {
        let searches = Number(input[i])

        if (searches > 1) {
            if (searches > 5 && i !== 2) {
                totalMoney += searches * income * 2
            } else if (searches <= 5 && i !== 2) {
                for (let x = 0; x < searches; x++) {
                    totalMoney += income
                }
            } else if (i === 2) {
                let result = searches * income * 3

                if (searches > 5) {
                    totalMoney += result * 2
                } else {
                    totalMoney += result
                }
            }
        }
    }
    console.log(`Total money earned: ${totalMoney.toFixed(2)}`);
}

googleSearches(["3.0",
    "7",
    "0",
    "1",
    "2",
    "3",
    "4",
    "6",
    "15"])


