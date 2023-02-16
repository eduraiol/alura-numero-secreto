const botaoJogarNovamente = '<button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>'

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if(chute === "game over"){
        document.body.style.background = '#000000';
        
        document.body.innerHTML += `<h3>Jogo finalizado!</h3> ${botaoJogarNovamente}`;
        return
    }

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    } 

    if(numeroForManiorOUMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto}
            <br>
            ${botaoJogarNovamente}
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa fa-arrow-down" aria-hidden="true"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa fa-arrow-up" aria-hidden="true"></i></div>
    ` 
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForManiorOUMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})