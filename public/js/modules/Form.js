export class Form{
    constructor(formDiv) {


        this._form = document.querySelector(formDiv)

        this._submit = this._form.querySelector("button")

        this.inputSelectArray = this.loadInputs()
        this.textareaSelectArray = this.loadTextareas()

        this.checkSubmitedLocalStorageForSubmited()
        this.preventDefault()
        this.valid = true;
    }


    getSubmit = (target) => {
        this._submit.addEventListener("click", () => {
            localStorage.setItem("submited", true)
            if (this.valid) window.location.href = target + "?data=" + this.getJSON();
        })
    }


    checkSubmitedLocalStorageForSubmited = () => {
        if (localStorage.getItem("submited")){
            this._form.classList.add("submited")
            localStorage.removeItem("submited")
            const submitedMsg = document.createElement("div")
            submitedMsg.classList.add("submitedMsg")
            submitedMsg.innerHTML = "Děkuji za odeslání"
            this._form.append(submitedMsg)
            window.scrollTo(0, this._form.offsetTop)
        } else if (this._form.classList.contains("submited")){
            this._form.classList.remove("submited")
        }
    }


    // zvaliduje zda komponenty s [data-required] nejsou empty
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
                    //const dataValue = input.getAttribute('data-required')

                    this.throwMessage(input, "Pole nesmí být prázdné")
                    this.valid = false
                } else{
                    this.valid = true
                }
            })
        })
    }


    // Po validním odeslání formu logne hodnoty
    _testSubmited = () => {
        if (this.valid){
            this._submit.addEventListener("click", () => {
                this.preventDefault()
                //this.logComponents()

                this.inputValueArray = this.createInputValueArray()
                console.log(this.inputValueArray)
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
                error = true
                throw new Error(`Error: Form input (${input}) is missing id !`)
            }
        })

        if (!error) return inputArray
    }

    // vytvoří array hodnot
    createTextAreaValueArray = () => {
        const textAreaArray = []
        let error = false;

        this.textareaSelectArray.forEach((textArea) => {
            const inputId = textArea.getAttribute("id")
            if (inputId) {
                const label = document.querySelector(`[for="${inputId}"]`)
                const labelValue = label ? label.innerHTML.trim() : null

                const inputValue = textArea.value
                const rowArray = [labelValue, inputId, inputValue]

                textAreaArray.push(rowArray)

            } else{
                error = true
                throw new Error(`Error: Form input (${textArea}) is missing id !`)
            }
        })

        if (!error) return textAreaArray
    }


    getJSON = () => {
       // ${input.getAttribute("id")}; value: ${input.value}
        const inputData = this.createInputValueArray()
        const textAreaData = this.createTextAreaValueArray()
        const data = {}

        inputData.forEach((e) => {
            const obj = {
                [e[0]]: e[2]
            }
            Object.assign(data, obj)
        })
        textAreaData.forEach((e) => {
            const obj = {
                [e[0]]: e[2]
            }
            Object.assign(data, obj)
        })

        const json = JSON.stringify(data, null, 1)
        return json
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