function sortAnArrayByCriteria(arr){
    let sortedArr = arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    console.log(sortedArr.join('\n'));
    // sortedArr.forEach(element => {
    //     console.log(element);
    // });

}

sortAnArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])