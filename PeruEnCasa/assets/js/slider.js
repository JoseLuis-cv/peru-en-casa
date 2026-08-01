const slides = [

"../assets/img/banner/bannercosta.jpg",

"../assets/img/banner/bannersierra.jpg",

"../assets/img/banner/bannerselva.jpg"

];

let slideActual = 0;

const heroImage = document.querySelector(".hero-image img");

function cambiarSlide(){

    slideActual++;

    if(slideActual >= slides.length){

        slideActual = 0;

    }

    heroImage.style.opacity="0";

    setTimeout(()=>{

        heroImage.src = slides[slideActual];

        heroImage.style.opacity="1";

    },300);

}

setInterval(cambiarSlide,5000);