const data = new Date()
let array_infos

function mostrar_tela(nome_dia,dia,mes,ano,hora,minuto){
    const section = document.querySelector('.container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('info')
    section.appendChild(paragrafo)
    paragrafo.innerHTML = `<strong>${nome_dia}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}H</strong>`
}

function diaNome (num){
    if (num == 0) return 'Domingo'
    if (num == 1) return 'Segunda'
    if (num == 2) return 'Terça'
    if (num == 3) return 'Quarta'
    if (num == 4) return 'Quinta'
    if (num == 5) return 'Sexta'
    if (num == 6) return 'Sábado'
}

function mesNome (num){
    if (num == 0) return 'Janeiro'
    if (num == 1) return 'Fevereiro'
    if (num == 2) return 'Março'
    if (num == 3) return 'Abril'
    if (num == 4) return 'Maio'
    if (num == 5) return 'Junho'
    if (num == 6) return 'Julho'
    if (num == 7) return 'Agosto'
    if (num == 8) return 'Setembro'
    if (num == 9) return 'Outubro'
    if (num == 10) return 'Novembro'
    if (num == 11) return 'Dezembro'
}

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}

function capturar_infos(data){
    const nome_dia = diaNome(data.getDay())
    const dia = data.getDate()
    const mes = mesNome(data.getMonth())
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const minuto = zeroAEsquerda(data.getMinutes())

    array_infos = [nome_dia,dia,mes,ano,hora,minuto]
    return array_infos
}

capturar_infos(data)
mostrar_tela(array_infos[0],array_infos[1],array_infos[2],array_infos[3],array_infos[4],array_infos[5])