const header = document.querySelector(".header");

let oculto = false;

window.addEventListener("scroll", () => {

    if (window.innerWidth > 768) return;

    const scroll = window.scrollY;

    if (scroll > 150 && !oculto) {

        header.classList.add("oculto");
        oculto = true;

    }

    if (scroll < 50 && oculto) {

        header.classList.remove("oculto");
        oculto = false;

    }

});