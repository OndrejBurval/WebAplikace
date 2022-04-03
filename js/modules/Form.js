export class Form{
    constructor(formDiv) {
        this._form = document.querySelector(formDiv)
        this._submit = this._form.querySelector("button")
    }

    _preventDefault = () => {
        this._submit.addEventListener("click", (e) => {
            e.preventDefault()
        })
    }

    _throwMessage = (div, msgText) => {
        const msg = document.createElement("div")
        msg.style.background = "#f18484"

        msg.classList.add("formValidationError")

        msg.innerHTML = msgText

        div.parentNode.insertBefore(msg, div.nextSibling)
    }

    validateRequired = () => {
        const requiredInputs = this._form.querySelectorAll('[data-required]')

        this._submit.addEventListener("click", (e) => {
            const formMsgs = document.querySelectorAll('.formValidationError')
            formMsgs.forEach((msg) => {
                msg.remove()
            })

            requiredInputs.forEach((input) => {

                if (input.value.length < 1){
                    e.preventDefault()
                    const dataValue = input.getAttribute('data-required')

                    this._throwMessage(input, "Pole nesmí být prázdné")
                }
            })
        })
    }
}