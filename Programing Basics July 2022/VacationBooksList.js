function vacantionBookList(input){
    let pageCount = Number(input[0]);
    let readPageOneHour = Number(input[1]);
    let day = Number(input[2]);

    let needTime = pageCount / readPageOneHour;
    let needTimeForDay = needTime / day
    console.log(needTimeForDay)
}

vacantionBookList(["212 ","20 ","2 "])
