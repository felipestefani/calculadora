function executaOperacao(n1,n2,sinal,visor){
    sinal == 'x' ?  visor.innerText = n1*n2 :
    sinal == '÷' ? visor.innerText = Math.round(((n1/n2+Number.EPSILON)*100000))/100000 :
    sinal == '+' ? visor.innerText = n1+n2 : 
    visor.innerText = n1 - n2
}

function limpar(visores){
    for(let visor of visores){
        visor.innerText = ``
    }
}

function adicionaPonto(){
    let visor = document.getElementById('inferior')
    visor.innerText == `` ? visor.innerText = `0.` : visor.innerText += `.`
}

function executaOperacaoPorcentagem(n1,n2,sinal,visor){
    sinal == 'x' ?  visor.innerText = n1*(n2/100) :
    sinal == '÷' ? visor.innerText = n1/(n2/100) :
    sinal == '+' ? visor.innerText = n1+(n1*(n2/100)) : 
    visor.innerText = n1-(n1*(n2/100))
}

function trocaSinal(visorSuperior, visorInferior){
    visorInferior.innerText == `` ? visorSuperior.innerText = parseFloat(visorSuperior.innerText)*(-1) :
    visorInferior.innerText = parseFloat(visorSuperior.innerText)*(-1)
}

function apaga(visorInferior){
    if(visorInferior.innerText != ``){
        visorInferior.innerText = visorInferior.innerText.slice(0,-1)
    }
}

export {executaOperacao, limpar, adicionaPonto, executaOperacaoPorcentagem,trocaSinal, apaga}