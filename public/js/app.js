import { Nav } from "./modules/Nav.js";
import { Form } from "./modules/Form.js";
import { Carousel} from "./modules/Carousel.js";
import { MouseOver } from "./modules/MouseOver.js";
import { addParallax} from "./modules/Parallax.js";
import { watchLinksInView } from "./utils/navUtil.js";

const navigace = new Nav(".mobile-nav-open", ".mobile-nav-close", ".nav--inner ul")
navigace.init()
const navBar = document.querySelector("nav")
navigace.addScrollingNav(navBar)

const form = new Form("#kontaktForm")
form.validateRequired()
form.getSubmit("/saveJson")
//form._testSubmited()

const carousel = new Carousel(".carousel-container")
carousel.init()

const mouseOver = new MouseOver()
mouseOver.createCursorDiv()
mouseOver.addTarget(".pathBoxes")

addParallax(".asset--1",-1)
addParallax(".asset--2",.6)
addParallax(".asset--3",.9)
addParallax(".asset--4",1)
addParallax(".asset--5",-1)
addParallax(".asset--clock",-0.8)
addParallax(".asset--lamp",0.5)
addParallax(".asset--character",-0.9)

watchLinksInView(".nav--item")
