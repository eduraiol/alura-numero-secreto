function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }

    if(numeroForManiorOUMenorQueOValorPermitido(numero)){
        console.log(`Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForManiorOUMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}