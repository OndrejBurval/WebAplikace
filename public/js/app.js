import { Nav } from "./modules/Nav.js";
import { Form } from "./modules/Form.js";
import { qs } from "./utils/utils.js";



const navigace = new Nav(".mobile-nav-open", ".mobile-nav-close", ".nav--inner ul")
navigace.init()


const form = new Form("#kontaktForm")

const btn = qs(".json")

console.log(variable)