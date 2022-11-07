const section = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const body = document.querySelector("body");

let prev = 0;
let calc = 0;
const sensitivity = 2;

section.addEventListener("mousedown", function (e) {
    const x = e.clientX;
    section.addEventListener("mousemove", rotate);
    function rotate(e) {
        calc = (e.clientX - x) / sensitivity;

        book.style.transform = `rotateY(${calc + prev}deg)`;
        body.style.cursor = "grabbing";
    }

    prev += calc;

    window.addEventListener("mouseup", function () {
        section.removeEventListener("mousemove", rotate);
        body.style.cursor = "default";
    });
});