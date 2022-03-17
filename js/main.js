// ------- NAV MOVIL OCULATR MORE & HAMBURGUESA -------- //
const moreOptions = document.querySelector("#bmore");//menu contextual
const bShowMovileLinks = document.querySelector("#bmenu");//boton hamburguesa
const movileMenu = document.querySelector(".links");//ontenedor del bmore
const moreMenu = document.querySelector(".more .menu");// mas menus cuando se despliega

bShowMovileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    movileMenu.classList.toggle("show");
  });
  
  moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
  });
  // ------------------------------------------------------------------