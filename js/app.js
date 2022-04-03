import { Nav } from "./modules/Nav.js";
import { Form } from "./modules/Form.js";


const navigace = new Nav(".mobile-nav-open", ".mobile-nav-close", ".nav--inner ul")
navigace.init()

const form = new Form("#kontaktForm")
form.validateRequired()