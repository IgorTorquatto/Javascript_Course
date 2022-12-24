let example = "One Text"

console.log(example[0])
console.log(example.charAt(1)) // Não dá erro quando sai do range.
console.log(example.indexOf('Text')) //Retorna o índice que *começa* o texto buscado.
console.log(example.replace(/One/, 'Two')) //Substitui os caracteres
console.log(example.replace(/e/g, '#')) //Substitui todos os caracteres "e" por conta do "g".
console.log(example.length) // Checar o tamanho.
console.log(example.slice(0,3)) //Fatia a string do indice que começa até o que termina , onde queremos, lembrar que o final não é onde termina o caractere em si , mas uma posição a mais da onde queremos.
console.log(example.split(' ')) // Divide para caractere com a marcação indicada em arrays
console.log(example.toUpperCase()) //Deixar tudo em maiúsculo.
console.log(example.toLowerCase()) // Deixar tudo em minúsculo.
