
function meuEscopo (){

    const form = document.querySelector('.form')
    const resultados = document.querySelector('.results')

    const pessoas = []

    function recebeEventoForm (evento){
        evento.preventDefault() //Prevenir que o formulário seja enviado ao clicar em "send"

        const nome = form.querySelector('.name')
        const sobrenome = form.querySelector('.surname')
        const peso = form.querySelector('.weight')
        const altura = form.querySelector('.height')

        pessoas.push({
            nome: nome.value ,
            sobrenome: sobrenome.value ,
            peso: peso.value ,
            altura: altura.value 
        })

        console.log(pessoas)

        resultados.innerHTML+= `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()