import {limpar, executaOperacao, adicionaPonto, executaOperacaoPorcentagem ,trocaSinal, apaga} from './operacoes.js'

let teclasEspeciais = document.querySelectorAll('.especial')
let teclasNumericas = document.querySelectorAll('.numero')
let visores = document.querySelectorAll('.visores')
let visorSuperior = visores[0]
let visorInferior = visores[1]
let visorSinal = visores[2]

function mostraValor(){
    let visor = visores[1]
    for(let tecla of teclasNumericas){
        tecla.addEventListener('click', (event) => {
            visor.innerText += `${event.target.innerText}`
        })
    }
}

function tratamentoSinais(sinalClique){
    if(visorSuperior.innerText==``){
        visorSuperior.innerText = visorInferior.innerText
    }
    visorSinal.innerText = sinalClique
    visorInferior.innerText = ``
}

function realizaOperacoes(){
    for(let tecla of teclasEspeciais){
        tecla.addEventListener('click', (event) => {
            let clique = event.target.innerText
            if(clique == 'C'){
                limpar(visores) 
            } else if(clique == '.'){
                adicionaPonto()
            } else if(clique == '±'){
                trocaSinal(visorSuperior, visorInferior)
            } else if(clique == '='){
                let n1 = parseFloat(visorSuperior.innerText)
                let n2 = parseFloat(visorInferior.innerText)
                if(!isNaN(n1) && !isNaN(n2)){
                    executaOperacao(n1, n2, visorSinal.innerText, visorSuperior)
                    visorInferior.innerText = ``
                    visorSinal.innerText = ``
                }  
            } else if (clique == '%'){
                let n1 = parseFloat(visorSuperior.innerText)
                let n2 = parseFloat(visorInferior.innerText)
                executaOperacaoPorcentagem(n1, n2, visorSinal.innerText, visorSuperior)
                visorInferior.innerText = ``
                visorSinal.innerText = ``
            } else if (clique == '⌫'){
                apaga(visorInferior)
            }
            else{
                tratamentoSinais(clique)
            }            
        })
    }
}

function calculadora() {
    mostraValor(teclasNumericas, visores)
    realizaOperacoes(teclasEspeciais, visores)
}

calculadora()

