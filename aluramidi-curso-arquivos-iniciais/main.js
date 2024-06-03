//aqui está sendo mapeado a tecla_pom 
let teclaPom = document.querySelector('.tecla_pom');

//aqui está feito adicionado um evento de click ao button tecla_pom, que assim que for clicado, deverá reproduzir o som selecionado
teclaPom.addEventListener("click", function() {
    let somTeclaPom = document.querySelector('#som_tecla_pom').play();
});
