function nxNMatrix(num){
    let arr = []
    for(let i = 1; i <= num; i++){
        let output = ''
        for(let k = 1; k <= num; k++){
            output += `${num} `
        }
        arr.push(output)
    }
    console.log(arr.join('\n'));
}
nxNMatrix(3)

// arrow function
// let rowGenerator = () => {
//     let singleRow = ''
//     for(let i = 1; i < num; i++){
//         singleRow += `${num} `
//     }
//     return singleRow;
// }