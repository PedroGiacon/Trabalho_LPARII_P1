//Esta linha atribui uma função anônima ao evento de rolagem da janela do navegador.
window.onscroll = function() {
   //Esta linha seleciona um elemento HTML com a classe "logocentro" usando o método querySelector do objeto document e armazena-o na variável logocentro.
   var logocentro = document.querySelector(".logocentro");
   //Esta linha seleciona um elemento HTML com a classe "navegacao" usando o método querySelector do objeto document e armazena-o na variável navegacao.  
   var navegacao = document.querySelector('.navegacao');
   //Esta linha verifica se a posição vertical atual de rolagem da página (window.pageYOffset) é maior do que a posição vertical do elemento navegacao (navegacao.offsetTop). Isso é usado para determinar se a barra de navegação deve se tornar fixa no topo da página ou não.
   if (window.pageYOffset > navegacao.offsetTop) {
      //Se a condição acima for verdadeira, a classe CSS "sticky" é adicionada ao elemento navegacao e a classe "desativo" é adicionada ao elemento logocentro. Essas classes são usadas para modificar a aparência dos elementos.
      navegacao.classList.add('sticky');
      logocentro.classList.add('desativo');
   } else {
      //Isso remove as classes CSS "sticky" e "desativo" dos elementos navegacao e logocentro, respectivamente, para que os elementos voltem ao seu estado original.
      navegacao.classList.remove('sticky');
      logocentro.classList.remove('desativo');
   }
}