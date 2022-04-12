const date = {
    name: "Pepé",
    breed: "poodle",
    color: "black"
}

const saveStorage = (data) => {
    const jsonData = JSON.stringify(data)
    fs.writeFile("sampleData.json",  "/n" + jsonData, function (err){
        if (err){
            console.log(err)
        }
    });
}
