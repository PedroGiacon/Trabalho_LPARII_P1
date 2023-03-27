// Este código adiciona um evento de rolagem à janela do navegador. Quando a janela é rolada, a função passada como segundo argumento é executada.
window.addEventListener('scroll', function(){
    // Dentro da função, o código obtém o elemento HTML com a classe "navegacao" usando o método querySelector e o armazena em uma variável chamada "navegacao".
    var navegacao = document.querySelector('.navegacao');
    // A próxima linha de código usa o método classList.toggle para adicionar ou remover a classe "sticky" do elemento "navegacao", dependendo da posição da rolagem da janela.
    navegacao.classList.toggle('sticky', window.scrollY > 135);
  })