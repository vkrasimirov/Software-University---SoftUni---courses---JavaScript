let info = {
    firstName: 'Pesho',
    lastName: 'Petrov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

let infoJSON = JSON.stringify(info); //or (info, null, 2)
console.log(infoJSON);

let convertedInfo = JSON.parse(infoJSON);
console.log(convertedInfo);
