const html = document.querySelector("html"); //html

//buttons
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button");
const iniciarOuPausarBt = document.querySelector("#start-pause span");
const tempoNaTela = document.querySelector("#timer");

const startPauseBt = document.querySelector("#start-pause");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/Fokus-projeto-base/sons/luna-rise-part-one.mp3");
musica.loop = true;
const audioPlay = new Audio("/Fokus-projeto-base/sons/play.wav");
const audioPausa = new Audio("/Fokus-projeto-base/sons/pause.mp3");
const audioTempoFinalizado = new Audio("/Fokus-projeto-base/sons/beep.mp3");

const iconPlayOuPause = document.querySelector(".app__card-primary-button-icon");

const titulo = document.querySelector(".app__title");
const banner = document.querySelector(".app__image");

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

//event click
musicaFocoInput.addEventListener("change", () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener("click", () => {
    alterarContexto('foco');
    focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
    alterarContexto("descanso-curto");
    curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
    alterarContexto("descanso-longo");
    longoBt.classList.add("active");
});

function alterarContexto (contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove("active")
    });
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/Fokus-projeto-base/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        //audioTempoFinalizado.play();
        alert('tempo finalizado');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo();
};

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
    iconPlayOuPause.setAttribute("src", "/Fokus-projeto-base/imagens/pause.png");
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    iconPlayOuPause.setAttribute("src", "/Fokus-projeto-base/imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = tempoDecorridoEmSegundos;
    tempoNaTela.innerHTML = `${tempo}`;
};