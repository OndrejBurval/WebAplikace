import { Nav } from "./modules/Nav.js";
import { Form } from "./modules/Form.js";
import { qs } from "./utils/utils.js";
import { Carousel} from "./modules/Carousel.js";
import { MouseOver } from "./modules/MouseOver.js";

const navigace = new Nav(".mobile-nav-open", ".mobile-nav-close", ".nav--inner ul")
navigace.init()

const form = new Form("#kontaktForm")
form.validateRequired()
form.getSubmit("/saveJson")
//form._testSubmited()

const carousel = new Carousel(".carousel-container")
carousel.init()

const mouseOver = new MouseOver()
mouseOver.createCursorDiv()
mouseOver.addTarget(".pathBoxes")
//mouseOver.addTarget(".reference")



