// Este código adiciona um evento de rolagem à janela do navegador. Quando a janela é rolada, a função passada como segundo argumento é executada.
window.addEventListener('scroll', function(){
    // Dentro da função, o código obtém o elemento HTML com a classe "menu" usando o método querySelector e o armazena em uma variável chamada "menu".
    var menu = document.querySelector('.menu');
    // A próxima linha de código usa o método classList.toggle para adicionar ou remover a classe "sticky" do elemento "menu", dependendo da posição da rolagem da janela.
    menu.classList.toggle('sticky', window.scrollY > 135);
  })