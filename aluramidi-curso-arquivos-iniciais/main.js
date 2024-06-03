const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');

teclaPom.addEventListener("click", function() {
    const somTeclaPom = document.querySelector('#som_tecla_pom').play();
});

teclaClap.addEventListener("click", function() {
    const somTeclaClap = document.querySelector('#som_tecla_clap').play();
});