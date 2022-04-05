const dog = {
    name: "Pepé",
    breed: "poodle",
    color: "black"
}


const saveData = (data) => {
    const fs = require("fs")

    const jsonData = JSON.stringify(data)
    fs.writeFile("./data/sampleData.json", jsonData, function (err){
        if (err){
            console.log(err)
        }
    });
}

saveData(dog)

