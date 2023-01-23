function soma(a,b){
    return a + b //retorno normal
}

function criaPessoa(nome,sobrenome){
    return {nome: nome,sobrenome: sobrenome} //retorna um objeto
}

const p1 = criaPessoa('Gerônimo','Silva')
console.log(p1);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }                   
    return falaResto
}

const olaMundo = falaFrase('Olá')  //essa variável é uma função falaResto
console.log(olaMundo('Mundo!'));  //Assim podemos usar a variável 'olaMundo' como se fosse uma função