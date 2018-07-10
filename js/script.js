//Versão 0.0.1
//  Crie um formulário que permita inserir um texto e um botão para "twittar".
//  Adicione um evento de click ao botão ou de submit no formulário.
//  No evento, obter o texto.
//  Adicione o texto ao HTML.

document.getElementById("inputTweet").addEventListener("keydown", writing);
document.getElementById("counter").innerHTML = 140;
inputTweet.addEventListener("input", resize);

function writing() {
    //desabilita botão se texto vazio
    console.log('chamou');
    var size = document.getElementById("inputTweet").value.length;
    if (size === 0 || size > 140 || size === "" || document.getElementById("inputTweet").value.match(/^[ \t\n\r\f\v]+$/)) {
    document.getElementById("myButton").disabled = true;
} 
    else {
    document.getElementById("myButton").disabled = false; 
    }
    var sizecount = 140-size;
    document.getElementById('counter').innerHTML = sizecount;
    //    Conte o número de caracteres de forma regressiva.
    if (sizecount > 20){
        counter.style.color= 'blue';
    }
    if (sizecount < 20 && sizecount >= 10){
        counter.style.color= 'yellow';
    }
    if (sizecount < 10 && sizecount >= 0){
        counter.style.color= 'orange';
    }
    if (sizecount < 0){
        counter.style.color= 'red';
    }
}

function resize() {
    inputTweet.style.height = "30px";
    inputTweet.style.height = inputTweet.scrollHeight + "px";
  }

function tweetar() {
    var time = document.createElement("p");
    //cria parágrafo para conter tweet
    var node = document.createElement("p");
    //cria texto do parágrafo pegando conteúdo do input
    var textnode = document.createTextNode((document.getElementById("inputTweet").value)+ ' ' +(moment().format('LT'))); 
    //adiciona contepudo do input no parágrafo
    node.appendChild(textnode);
    document.getElementById("printedTweet").insertBefore(node, document.getElementById("printedTweet").childNodes[0]);
    event.preventDefault();
}





//Versão 0.0.4
//    Ao pressionar enter (/n) aumente a área de texto de acordo com o tamanho do texto.
//Versão 0.0.5 (Extra)
//    Se o número de caracteres digitados (sem dar um "enter") exceder o tamanho da área de texto 
//por padrão, mais uma linha deverá ser adicionada para que a rolagem não apareça. (Se aplicável)
//Versão 0.0.6 (Extra)
//    Adicione a hora em que o tweet foi publicado no formato de 24 horas hh:mm.
