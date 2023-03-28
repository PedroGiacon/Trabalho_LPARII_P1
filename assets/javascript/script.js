window.onscroll = function() {
  var navegacao = document.querySelector('.navegacao');
  if (window.pageYOffset > navegacao.offsetTop) {
     navegacao.classList.add('sticky');
  } else {
     navegacao.classList.remove('sticky');
  }
}
