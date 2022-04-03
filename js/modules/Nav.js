export class Nav{
    constructor(navOpenBtn, navCloseBtn, navBar) {
        this._navOpenBtn = document.querySelector(navOpenBtn)
        this._navCloseBtn = document.querySelector(navCloseBtn)
        this._navBar = document.querySelector(navBar)
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

    init = () => {
        this._addOpenListener()
        this._addCloseListener()
    }
}