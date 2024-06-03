//aqui está sendo mapeado a tecla
const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');

//aqui está sendo adicionado um evento de click ao button, que assim que for clicado, deverá reproduzir o som selecionado
teclaPom.addEventListener("click", function() {
    const somTeclaPom = document.querySelector('#som_tecla_pom').play();
});

teclaClap.addEventListener("click", function() {
    const somTeclaClap = document.querySelector('#som_tecla_clap').play();
});
