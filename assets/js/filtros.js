const btnFiltros = document.getElementById("btnFiltros");
const sidebar = document.getElementById("sidebarFiltros");

if(btnFiltros && sidebar){

    btnFiltros.addEventListener("click",()=>{

        sidebar.classList.toggle("abierto");

    });

}