let n1=Number(prompt('Digite Um numero'))
let texto=document.querySelector("h1")
texto.innerHTML=`Seu Numero é ${n1} `

document.body.innerHTML += `Raiz quadrada :${n1 ** 0.5} <br>`
document.body.innerHTML +=`${n1} é inteiro : ${Number.isInteger(n1)} <br>`
document.body.innerHTML +=` É NaN: ${Number.isNaN(n1)} <br>`
document.body.innerHTML +=` Arrendondo para baixo: ${Math.floor(n1)} <br>`
document.body.innerHTML +=` Arrendondo para cima: ${Math.ceil(n1)} <br>`
document.body.innerHTML +=` com suas casas decimais: ${(n1.toFixed(2))} <br>`
