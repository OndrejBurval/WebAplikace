// záloha- původní carousel
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

    nextBtn.classList.add("clicked");
    setTimeout(() => {
        nextBtn.classList.remove("clicked");
    }, 350);

    carouselDiv[counter].classList.remove("active");
    counter++;
    carouselDiv[counter].classList.add("active");

    if (prevBtn.classList.contains("last")) prevBtn.classList.remove("last")
    if (counter + 1 === carouselDiv.length) nextBtn.classList.add("last");


    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;

    prevBtn.classList.add("clicked");
    setTimeout(() => {
        prevBtn.classList.remove("clicked");
    }, 350);

    carouselDiv[counter].classList.remove("active");
    counter--;
    carouselDiv[counter].classList.add("active")

    if (nextBtn.classList.contains("last")) nextBtn.classList.remove("last")
    if (counter === 0) prevBtn.classList.add("last")

    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";
})

carouselSlide.addEventListener("transitionend", () => {
    if (counter <= 0 || counter >= carouselDiv.length) return;
})