function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

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
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
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