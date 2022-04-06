export class MouseOver {
    constructor() {
        this._body = document.querySelector("body")
    }

    createCursorDiv = () => {
        const cursorDiv = document.createElement("div")
        cursorDiv.classList.add("cursorBG")
        this._body.append(cursorDiv)
        this._cursorDiv = cursorDiv
    }

    addTarget = (target) => {
        const div = document.querySelector(target)

        if (div == null) return console.error(`Zvolený div ('${target}') nelze nalézt`)

        this._addMouseEnter(div)
        this._addMouseLeave(div)
    }

    _addMouseEnter = (div) => {

        div.addEventListener("mouseover", () => {
            this._addTransform()
            this._setDivPosition()

        });
    }

    _addMouseLeave = (div) => {

        div.addEventListener("mouseleave", () => {
            this._cursorDiv.style.transform = "scale(0)";
        });
    }

    _addTransform = () => {
        this._cursorDiv.style.transform = "scale(1)";
        this._cursorDiv.style.opacity= "0.8";
    }

    _setDivPosition = () => {
        this._body.addEventListener("mousemove", (e) => {
            let calcX = e.pageX - 25;
            let calcY = e.pageY - 25;
            this._cursorDiv.style.top = `${calcY}px`;
            this._cursorDiv.style.left = `${calcX}px`;
        });
    }

}