function meuEscompo() {
  const form = document.querySelector(".form");
  const resultado=document.querySelector('.resultado')
  const pessoas=[]
  
  function eventoForm(evento){
          evento.preventDefault();
          const nome=form.querySelector('.nome')
          const sobrenome=form.querySelector('.sobrenome')
          const peso=form.querySelector('.peso')
          const altura=form.querySelector('.altura')
          resultado.innerHTML+=` ${nome.value} ${sobrenome.value} ${peso.value}kg ${altura.value}cm<br>`
          
          const pessoas={
                  nome:nome.value,
                  sobrenome:sobrenome.value,
                  peso:peso.value,
                  altura:altura.value,
                }    
                
                console.log(pessoas)
        }
        form.addEventListener('submit',eventoForm)
      
}
meuEscompo();
