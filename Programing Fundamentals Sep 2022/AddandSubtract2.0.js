function addAndSubtract2(first, second, last){

    function add(a,b){
    let sumOfTwoNums = a + b
    return sumOfTwoNums
    }

    let sum = add(first,second)
    
    function subtract(sum,last) {
        return sum - last
    }

    let result = subtract(sum,last)

    console.log(result)
}

addAndSubtract2(23,6,10)