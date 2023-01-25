function wildZoo(input) {
    let zoo = {};
    let areas = {};
 
    let commandLine = input.shift();
    
    while (commandLine !== 'EndDay') {
        let [command, args] = commandLine.split(' ');
        let pArgs = args.split('-');
        let name = pArgs[0];
        let food = Number(pArgs[1]);
        let area = pArgs[2];
 
        if (command === 'Add:') {
            if (!zoo.hasOwnProperty(name)) {
                zoo[name] = 0;
 
                if (!areas.hasOwnProperty(area)) {
                    areas[area] = 0;
                }
                areas[area]++;
            }
            zoo[name] += food;
        } else if (command === 'Feed:') {
            if (zoo.hasOwnProperty(name)) {
                zoo[name] -= food;
 
                if (zoo[name] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete zoo[name];
                    areas[area]--;
                }
            } else {
                break;
            }
        }
        commandLine = input.shift();
    }
    console.log('Animals:');
 
    for (const animal in zoo) {
        console.log(` ${animal} -> ${zoo[animal]}g`);
    }
    console.log('Areas with hungry animals:');
 
    for (const area in areas) {
        console.log(`${area}: ${areas[area]}`);
    }

}


wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])