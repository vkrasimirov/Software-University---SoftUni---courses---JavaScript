function smalestOfThreeNums(first,second,last){
    // let smallestNum = Math.min(first, second, last)
    // console.log(smallestNum);

    // function smalestOfThreeNums(arrayOfNums)
    // Math.min(...arrayOfNums)

    let smallestNum = 0

    if(first < second){
        smallestNum = first
    } else if(second < first) {
        smallestNum = second
    }

    if(smallestNum > last){
        console.log(last);
    } else {
        console.log(smallestNum);
    }
}

smalestOfThreeNums(2,5,3)