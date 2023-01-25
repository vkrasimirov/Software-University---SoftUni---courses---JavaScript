function leepYear(input){
    let year = Number(input)

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("yes")
    } else {
        console.log("no")
    }

    //let isLeepYear = (Number(year) % 4 === 0 && Number(year) % 100 !== 0) || Number(year) % 400 === 0

    //if(isLeepYear){
        //console.log("yes");
    //} else {
        //console.log("no");
    //}
}

leepYear(1984)