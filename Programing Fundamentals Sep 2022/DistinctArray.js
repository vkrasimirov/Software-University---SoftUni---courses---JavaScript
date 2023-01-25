function distinctArray(arr){
    let uniqueNumsArr = []

    for(let i = 0; i < arr.length; i++){
        if(!uniqueNumsArr.includes(arr[i]))
        uniqueNumsArr.push(arr[i])
    }

    console.log(uniqueNumsArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])