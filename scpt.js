var texto = document.getElementById('infJogo')
var cont = 2
function mudaTexto(){
    if(cont == 1){
    texto.innerHTML = "<p>Olá, <b>Gamers!</b><br>O <b>Leaders at the Top</b> foi desenvolvido para facilitar a busca de campeões e items do jogo League Of </p>"
    } else if (cont == 2){texto.innerHTML = "<p>Linguagens utilizadas:</p><br><img class='icone' src ='javascript.png'><img class='icone' src='css.png'><img class='icone' src ='html.png'>"}
    cont = (cont % 2) + 1;
} 

