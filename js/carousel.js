const carouselSlide = document.querySelector(".carousel-slide");
const carouselDiv = document.querySelectorAll(".carousel-slide .slide");

const prevBtn = document.querySelector("#prevSlide");
const nextBtn = document.querySelector("#nextSlide");

let counter = 1;
carouselDiv[counter].classList.add("active");
const size = document.querySelector(".carousel-slide .active").clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";

nextBtn.addEventListener("click", () => {
    if (counter >= carouselDiv.length - 1) return;

    carouselDiv[counter].classList.remove("active");
    counter++;
    carouselDiv[counter].classList.add("active");

    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;

    carouselDiv[counter].classList.remove("active");
    counter--;
    carouselDiv[counter].classList.add("active");

    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";
})

carouselSlide.addEventListener("transitionend", () => {
    if (counter <= 0 || counter >= carouselDiv.length) return;

    carouselDiv[counter - 1].classList.remove("active");
    carouselDiv[counter + 1].classList.remove("active");

})