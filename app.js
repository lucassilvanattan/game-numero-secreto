let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();

let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
    {rate:1.2});
}


function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;    
    if(numerosecreto == chute) {
        exibirTextoNaTela("h1", "Parabéns você acertou");
        let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensenagemtentativas = `você acertou o numero secreto com ${tentativas} ${palavratentativa}`;
        document.getElementById("reiniciar").removeAttribute("disabled");

        exibirTextoNaTela("p", mensenagemtentativas);
    } else { 
        if(chute > numerosecreto){
            exibirTextoNaTela("h1", "Você errou");
            exibirTextoNaTela("p", "o número secreto é menor");
            limparCampo()
        } else{
            exibirTextoNaTela("h1", "Você errou");
            exibirTextoNaTela("P", "o número secreto é maior");
        }
            limparCampo()
        tentativas++;

    }
    
}
function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosDaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
} else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;

   }
}

function limparCampo() { 
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").removeAttribute("disabled");
}