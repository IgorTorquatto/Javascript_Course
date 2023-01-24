function criaPessoa (nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.` //this faz referência ao objeto
        },
        altura: altura,
        peso: peso,
        /*get*/imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz','Otávio',1.8,80)
console.log(p1.imc());

//Podemos usar o get para que imc finja ser um atributo