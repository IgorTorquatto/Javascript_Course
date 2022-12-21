let num = window.prompt("Enter a number: ")
let final_num = Number(num)

window.document.body.innerHTML = `<h1>Your number is: ${num}</h1>`
window.document.body.innerHTML += `<p>Square root: ${Math.sqrt(final_num).toFixed(2)}</p>`
window.document.body.innerHTML += `<p>NaN?: ${Number.isNaN(final_num)}</p>`
window.document.body.innerHTML += `<p>Floor number: ${Math.floor(final_num)}</p>`
window.document.body.innerHTML += `<p>Ceil number?: ${Math.ceil(final_num)}</p>`
window.document.body.innerHTML += `<p>With two decimal places: ${Number(final_num).toFixed(2)}</p>`