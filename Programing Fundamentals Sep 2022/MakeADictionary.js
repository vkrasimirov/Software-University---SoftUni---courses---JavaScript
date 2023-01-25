function makeADictionary(arr) {
    let dictionary = {};
    for (let line of arr) {
        let obj = JSON.parse(line);
        dictionary = Object.assign(dictionary, obj);
    }
    let sortedDictionary = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    for (let term of sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}

makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
    
    '{"Microphone":"An instrumentfor converting sound waves intoelectrical energy variationswhich may then be amplified,transmitted, or recorded."}'])