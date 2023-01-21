//Como sabemos podemos colocar um valor padrão em um parâmetro, assim , caso não for passado, o valor padrão será utilizado.

function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao(2, undefined, 20)

//Como não queremos passar um valor para um parâmetro que está entre outros dois , precisamos enviar o undefined e assim ele utilizará o "2".
//lembrando que não pode ficar vazio . ex: funcao(2,,20)