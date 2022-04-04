import { Nav } from "./modules/Nav.js";
import { Form } from "./modules/Form.js";
import { qs } from "./utils/utils.js";



const navigace = new Nav(".mobile-nav-open", ".mobile-nav-close", ".nav--inner ul")
navigace.init()


const form = new Form("#kontaktForm")

const btn = qs(".json")


const dog = {
    name: "Pepé",
    breed: "poodle",
    color: "black"
}


/*
export const saveData = (data) => {

    const jsonData = JSON.stringify(data)
    fs.writeFile("./data/sampleData.json", jsonData, function (err){
        if (err){
            console.log(err)
        }
    });
}

saveData(dog)


 */