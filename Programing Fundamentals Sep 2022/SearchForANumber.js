function searchForANum(numsArr,actionArr){
    let numsToTake = actionArr[0]
    let removedNums = actionArr[1]
    let specialNum = actionArr[2]
    
    let takenNums = numsArr.slice(0,numsToTake)
    takenNums.splice(0,removedNums)

    let counter = 0

    for (const number of takenNums) {
        if(number === specialNum){
            counter++
        }

    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);

}

searchForANum([5, 2, 3, 4, 1, 6], [5, 2, 3])