function ProjectsCreation(input){
    let name = (input[0]);
    let a = 3
    let numbers = (input[1])
    let area = numbers * 3
    let result = `The architect ${name} will need ${area} hours to complete ${numbers} project/s.`
    console.log(result)
}

ProjectsCreation(["Gorge", "4"])
