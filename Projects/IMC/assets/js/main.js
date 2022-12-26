//Capturar o form
const form = document.querySelector(".form")

//Capturar o evento de submit do formulário
form.addEventListener('submit',function (event){ //escuta o evento
    event.preventDefault() //previne o envio

    const inputPeso = event.target.querySelector('#peso') //pegando o input inteiro
    const inputAltura = event.target.querySelector('#altura') //pegando o input inteiro

    const peso = Number(inputPeso.value)   //pegando os valores
    const altura = Number(inputAltura.value) //pegando os valores

    if (!peso){
        setResultado('Peso inválido',false)
        return 
    }

    if(!altura){
        setResultado('Altura inválida',false)
        return 
    }

    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg,true)
})

function getNivelImc(imc){
    const nivel = ['Abixo do peso','Peso Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5)  return nivel[0]
}

function getImc(peso,altura){
    const imc = peso / (altura **2)
    return imc.toFixed(2)
}

function criaP(){
    const paragrafo = document.createElement('p')  //cria o parágrafo
    return paragrafo
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''        //reseta o texto que está em resultado
    const p = criaP()
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }
    else{
        p.classList.add('bad')
    }
    p.innerHTML = `${msg}`
    resultado.appendChild(p)
}
