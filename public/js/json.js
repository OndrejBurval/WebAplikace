const dog = {
    name: "Pepé",
    breed: "poodle",
    color: "black"
}

sayHello = () => {
    console.log("Hello")
}

saveData = (fs, data) => {
    const jsonData = JSON.stringify(data)
    fs.writeFile("sampleData.json", jsonData, function (err){
        if (err){
            console.log(err)
        }
    });
}


