const botoes = document.querySelectorAll( '.botao');

for(let i=0;i <botoes.lenght;i++){,
botoes[i].onclick = function( ) {
  for(let k=0; k < botoes.lenght; k++) {
    botoes[k].classList.remove('ativo');
    }
botoes[i].classList.add('ativo');
}