const navOpenBtn = document.querySelector(".mobile-nav-open");
const navCloseBtn = document.querySelector(".mobile-nav-close");

const navBar = document.querySelector(".nav--inner ul");

navOpenBtn.addEventListener("click", (e) => {
    navBar.style.transition = ".3s ease-in-out";
    navBar.style.transform = "translateX(0px)";
})

navCloseBtn.addEventListener("click", (e) => {
    navBar.style.transform = "translateX(85vw)";
})
