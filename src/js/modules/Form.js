export class Form{
    constructor(formDiv) {
        this._form = document.querySelector(formDiv)
        this._submit = this._form.querySelector("button")

        this.inputSelectArray = this.loadInputs()
        this.textareaSelectArray = this.loadTextareas()

        this.valid = true;
        this.preventDefault()

        this.inputValueArray = this.createInputValueArray()
        console.log(this.inputValueArray)
    }




    // zvaliduje zda komponenty s [data-required] nejsou empty
    _validateRequired = () => {
        const requiredInputs = this._form.querySelectorAll('[data-required]')

        this._submit.addEventListener("click", (e) => {
            const formMsgs = document.querySelectorAll('.formValidationError')
            formMsgs.forEach((msg) => {
                msg.remove()
            })

            requiredInputs.forEach((input) => {
                if (input.value.length < 1){
                    e.preventDefault()
                    //const dataValue = input.getAttribute('data-required')

                    this.throwMessage(input, "Pole nesmí být prázdné")
                    this.valid = false
                } else{
                    e.preventDefault()
                    this.valid = true
                }
            })
        })
    }


    // Po validním odeslání formu logne hodnoty
    _logSubmited = () => {
        if (this.valid){
            this._submit.addEventListener("click", () => {
                this.logComponents()
                this.clearInputs()
                this.clearTextareas()
            })
        }
    }

    // Zamezí submitu
    preventDefault = () => {
        this._submit.addEventListener("click", (e) => {
            e.preventDefault()
        })
    }

    // Hodí error boxy za chybný input
    throwMessage = (div, msgText) => {
        const msg = document.createElement("div")
        msg.style.background = "#f18484"
        msg.classList.add("formValidationError")
        msg.innerHTML = msgText
        div.parentNode.insertBefore(msg, div.nextSibling)
    }

    // Načte všechny inputy do arraye
    loadInputs = () => { return this._form.querySelectorAll("input") }

    // Načte všechny TextAreay do arraye
    loadTextareas = () => { return this._form.querySelectorAll("textarea") }

    // Logne komponenty : id a hodnoty
    logComponents = () => {
        console.log(`Inputs: (${this.inputSelectArray.length})`)
        this.inputSelectArray.forEach((input) => {
            console.log(`  id: #${input.getAttribute("id")}; value: ${input.value}`)
        })

        console.log(`TextAreas: (${this.textareaSelectArray.length})`)
        this.textareaSelectArray.forEach((textarea) => {
            console.log(`  id: #${textarea.getAttribute("id")}; value: ${textarea.value}`)
        })
    }

    // vymaže hodnoty inputů
    clearInputs = () => {
        this.inputSelectArray.forEach((input) => {
            input.value = ""
        })
    }

    // vymaže hodnoty textareayů
    clearTextareas = () => {
        this.textareaSelectArray.forEach((textarea) => {
            textarea.value = ""
        })
    }


    // vytvoří array hodnot
    createInputValueArray = () => {
        const inputArray = []
        let error = false;

        this.inputSelectArray.forEach((input) => {
            const inputId = input.getAttribute("id")
            if (inputId) {
                const label = document.querySelector(`[for="${inputId}"]`)
                const labelValue = label ? label.innerHTML.trim() : null

                const inputValue = input.value
                const rowArray = [labelValue, inputId, inputValue]

                inputArray.push(rowArray)

            } else{
                throw new Error("Error: Form input (${input}) is missing id !")
                error = true
            }
        })

        if (!error) return inputArray
    }


    getFunctions = () => {
        console.log("Form Function list:" +
            "\n    _validateRequired()" +
            "\n    _logSubmited()" +
            "\n    preventDefault()" +
            "\n    throwMessage()" +
            "\n    loadInputs()" +
            "\n    loadTextareas()" +
            "\n    logComponents()" +
            "\n    clearInputs()" +
            "\n    clearTextareas()" +
            "\n    createInputValueArray()")
    }


}