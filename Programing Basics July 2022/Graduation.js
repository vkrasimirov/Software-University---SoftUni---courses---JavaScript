function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let negativeGradeCount = 0;
    let sumGrade = 0;
    let hasExcluded = false;
 
    while (i <= 12) {
        let result = Number(input[index]);
        index++;
        if (result < 4) {
            negativeGradeCount++;
            if (negativeGradeCount == 2) {
                hasExcluded = true;
                break;
            }
            continue;
        }
        sumGrade += result;
        i++;
    }
    if (hasExcluded) {
        console.log(`${name} has been excluded at ${i} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }
 
}

//graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])