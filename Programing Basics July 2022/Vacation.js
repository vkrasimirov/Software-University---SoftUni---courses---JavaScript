function vacation(input) {
    let neededMoney = Number (input[0]);
    let moneyHave = Number (input[1]);
   
    let index = 2;
   
    let spendDay = 0;
    let days = 0;
   
  while(neededMoney > moneyHave && spendDay !== 5){
   
    if(input[index] === "spend"){
      moneyHave -= Number (input[index + 1]);
      if (moneyHave < 0){
        moneyHave = 0
      }
      spendDay++;
    }else{
      moneyHave += Number (input[index+1])
    spendDay = 0;
    }
    days++;
    index += 2;
  }
  if(spendDay !== 5){
    console.log(`You saved the money for ${days} days.`);
  }else{
  console.log(`You can't save the money.\n${days}`);
  }

  }

vacation(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])