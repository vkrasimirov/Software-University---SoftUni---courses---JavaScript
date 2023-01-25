function furniture(input) {
    
    let totalMoney = 0
    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g
    console.log('Bought furniture:');

    let i = 0
    //let currentRow = input[i]
    while(input[i] !== 'Purchase'){
        let productRow = input[i]
        let validProduct = pattern.exec(productRow)

        while(validProduct !== null){
            const productName = validProduct.groups['name']
            console.log(productName);
            const productPrice = validProduct.groups['price']
            const productQuantity = validProduct.groups['quantity']

            totalMoney += productPrice * productQuantity     
            
            validProduct = pattern.exec(productRow)
        }

        i++
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])