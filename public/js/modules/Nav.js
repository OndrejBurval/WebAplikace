

export class Nav{
    constructor(navOpenBtn, navCloseBtn, navBar) {
        this._navOpenBtn = document.querySelector(navOpenBtn)
        this._navCloseBtn = document.querySelector(navCloseBtn)
        this._navBar = document.querySelector(navBar)
        this._linkArray = this._navBar.querySelectorAll(".nav--item a")
    }

    _addOpenListener = () => {
        this._navOpenBtn.addEventListener("click", () => {
            this._navBar.style.transition = ".3s ease-in-out"
            this._navBar.style.transform = "translateX(0px)";
        })
    }

    _addCloseListener = () => {
        this._navCloseBtn.addEventListener(("click"), () => {
            this._navBar.style.transform = "translateX(85vw)"
        })
    }

    _linkClickedListener = () => {
        this._linkArray.forEach((e) => {
            e.addEventListener("click", () => {
                if (window.innerWidth < 768) this._navBar.style.transform = "translateX(85vw)"
            })
        })
    }

    addScrollingNav = (nav) => {
        nav.style.position = "fixed"
        nav.style.transition = ".3s"
        nav.style.width = "100vw"

        document.addEventListener("scroll", () => {
            const scroll = window.scrollY
            let navHeight = nav.offsetHeight
            scroll > navHeight ? nav.classList.add("scrolling") : nav.classList.remove("scrolling")
        });
    }

    init = () => {
        this._addOpenListener()
        this._addCloseListener()
        this._linkClickedListener()
    }
}