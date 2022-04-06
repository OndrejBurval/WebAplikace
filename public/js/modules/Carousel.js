export class Carousel{
    constructor(carouselDiv) {
        this._carouselDiv = document.querySelector(carouselDiv)
    }

    init = () => {
        this._loadComponents()
        this._carouselSlides[this.counter].classList.add("active")
        this.slideWidth = this._carouselDiv.querySelector(".carousel-slide .active").clientWidth
        this._slide.style.transform = "translateX(" + (-this.slideWidth * this.counter) + "px"

        this._addNextListener()
        this._addPrevListener()
    }

    _loadComponents = () => {
        this._slide = this._carouselDiv.querySelector(".carousel-slide")
        this._carouselSlides = this._carouselDiv.querySelectorAll(".carousel-slide .slide")
        this._carouselLength = this._carouselSlides.length
        this._prevBtn = this._carouselDiv.querySelector("#prevSlide")
        this._nextBtn = this._carouselDiv.querySelector("#nextSlide")

        this.counter = 1
        this.slideWidth = 0
    }

    _addNextListener = () => {
        this._nextBtn.addEventListener("click", () => {
            if (this.counter >= this._carouselLength - 1) return

            this._triggerClicked(this._nextBtn)

            this._removeActive()
            this.counter++;
            this._addActive()

            this._removeLastClass(this._prevBtn)
            if (this.counter + 1 === this._carouselLength) this._nextBtn.classList.add("last")

            this._moveSlide()
        })
    }

    _addPrevListener = () => {
        this._prevBtn.addEventListener("click", () => {
            if (this.counter <= 0) return;

            this._triggerClicked(this._prevBtn)

            this._removeActive()
            this.counter--;
            this._addActive()

            this._removeLastClass(this._nextBtn)
            if (this.counter === 0) this._prevBtn.classList.add("last")

            this._moveSlide()
        })
    }

    _triggerClicked = (target) => {
        target.classList.add("clicked");
        setTimeout(() => {
            target.classList.remove("clicked");
        }, 350);
    }

    _removeActive = () => {
        this._carouselSlides[this.counter].classList.remove("active")
    }

    _addActive = () => {
        this._carouselSlides[this.counter].classList.add("active")
    }

    _removeLastClass = (e) => {
        if (e.classList.contains("last")) e.classList.remove("last")
    }

    _moveSlide = () => {
        this._slide.style.transform = "translateX(" + (-this.slideWidth * this.counter) + "px";
    }

}