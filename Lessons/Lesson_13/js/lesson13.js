let participar = confirm("Você deseja informar o seu nome? ")

if (participar == true){
    let nome = prompt("Digite seu nome: ")
    document.body.innerHTML= `Seu nome é ${nome}.<br>`
    document.body.innerHTML+= `Seu nome tem ${nome.length} letras.<br>`
    document.body.innerHTML+= `A segunda letra do seu nome é ${nome.charAt(1)}.<br>`
    document.body.innerHTML+= `O primeiro índice da letra a no seu nome é ${nome.indexOf('a')}.<br>`
    document.body.innerHTML+= `O último índice da letra a no seu nome é ${nome.lastIndexOf('a')}.<br>`
    document.body.innerHTML+= `As palavras do seu nome são ${nome.split(' ')}.<br>`
    document.body.innerHTML+= `As últimas 3 letras do seu nome são ${nome.slice(-3,nome.length)}.<br>`
    document.body.innerHTML+= `Seu nome em letras maiúculas ${nome.toUpperCase()}.<br>`
    document.body.innerHTML+= `Seu nome em letras minúculas ${nome.toLowerCase()}.<br>`
}
