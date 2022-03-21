const pathBoxesDiv = document.querySelector(".pathBoxes");
const pathBoxes = document.querySelectorAll(".pathBox");

const body = document.querySelector("body");

const cursorDiv = document.createElement("div");
cursorDiv.classList.add("cursorBG");

body.append(cursorDiv);



pathBoxesDiv.addEventListener("mouseover", (e) => {
    cursorDiv.style.transform = "scale(1)";
    cursorDiv.style.opacity= "1";

    body.addEventListener("mousemove", (ev) => {
        let calcX = ev.pageX - 25;
        let calcY = ev.pageY - 25;
        cursorDiv.style.top = `${calcY}px`;
        cursorDiv.style.left = `${calcX}px`;
    });
});

pathBoxesDiv.addEventListener("mouseleave", (e) => {
    cursorDiv.style.transform = "scale(0)";
});