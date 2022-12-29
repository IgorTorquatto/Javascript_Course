// Colocar a cor de background do document em todos os parágrafos

const paragrafos = document.querySelector(".paragrafos") //querySelector pega apenas o primeiro elemento com o nome passado.
const ps = paragrafos.querySelectorAll("p")  //cria um NodeList que funciona similar a um array

const estilosBody = getComputedStyle(document.body)  //todo o css do browser
const backgroundColorBody = estilosBody.backgroundColor
 
for (p of ps){
    p.classList.add("exercicio_p")
}

/*
for (p of ps){
   p.style.backgroundColor = backgroundColorBody
   p.style.color = "#FFFFFF"
}

*/
