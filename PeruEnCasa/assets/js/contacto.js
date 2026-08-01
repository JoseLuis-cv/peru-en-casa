const formulario = document.getElementById("formContacto");

if(formulario){

    formulario.addEventListener("submit",function(e){

        e.preventDefault();

        alert("✅ Gracias por contactarnos.\n\nResponderemos tu mensaje lo antes posible.");

        formulario.reset();

    });

}