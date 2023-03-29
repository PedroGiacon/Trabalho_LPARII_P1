window.onscroll = function() {
  var divElemento = document.querySelector(".logocentro");
  var navegacao = document.querySelector('.navegacao');
  if (window.pageYOffset > navegacao.offsetTop) {
     navegacao.classList.add('sticky');
     divElemento.classList.add('desativo');

  } else {
     navegacao.classList.remove('sticky');
     divElemento.classList.remove('desativo');
  }
}
