function numbersNto1(data){
    let n = Number(data[0])
    //for (let i = n; i >= 100; i--){
    //    console.log(i)
    //}

    for (let i = n; i >= 1; i = i - 1){
        console.log(i)
    }
}

numbersNto1([100])