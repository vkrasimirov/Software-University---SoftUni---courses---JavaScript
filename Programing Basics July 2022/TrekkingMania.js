function trekkingMania(input){
    let groupGount = Number(input[0])
    let all = 0
 
    let mussala = 0
    let monblan = 0
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0
 
 
    for(let i = 1; i < input.length; i++){
        let groupPeopleCount = Number(input[i]);
        all += groupPeopleCount;
        if (groupPeopleCount <= 5){
            mussala += groupPeopleCount
        } else if (groupPeopleCount > 5 && groupPeopleCount <= 12){
            monblan += groupPeopleCount
        } else if (groupPeopleCount > 12 && groupPeopleCount <= 25){
            kilimanjaro += groupPeopleCount
        } else if (groupPeopleCount > 25 && groupPeopleCount <= 40){
            k2 += groupPeopleCount
        } else {
            everest += groupPeopleCount
        }
 
    }
        let percent1 = (mussala / all) * 100
        let percent2 = (monblan / all) * 100
        let percent3 = (kilimanjaro / all) * 100
        let percent4 = (k2 / all) * 100
        let percent5 = (everest / all) * 100
 
        console.log(`${percent1.toFixed(2)}%`)
        console.log(`${percent2.toFixed(2)}%`)
        console.log(`${percent3.toFixed(2)}%`)
        console.log(`${percent4.toFixed(2)}%`)
        console.log(`${percent5.toFixed(2)}%`)
 
}

trekkingMania(["5","25","41","31","250","6"])