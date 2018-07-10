//Versão 0.0.1
//  Crie um formulário que permita inserir um texto e um botão para "twittar".
//  Adicione um evento de click ao botão ou de submit no formulário.
//  No evento, obter o texto.
//  Adicione o texto ao HTML.

document.getElementById("inputTweet").addEventListener("keydown", writing);
//document.getElementById("inputTweet").addEventListener("keydown", counter);

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
//    Conte o número de caracteres de forma regressiva.
  

}

function tweetar() {
    //cria parágrafo para conter tweet
    var node = document.createElement("p");
    //cria texto do parágrafo pegando conteúdo do input
    var textnode = document.createTextNode(document.getElementById("inputTweet").value); 
    //adiciona contepudo do input no parágrafo
    node.appendChild(textnode);
    document.getElementById("printedTweet").insertBefore(node, document.getElementById("printedTweet").childNodes[0]);
    event.preventDefault();
}



//Versão 0.0.2
//    Conte o número de caracteres de forma regressiva.
//Versão 0.0.3


//Versão 0.0.3
//    Se você passar os 120 caracteres, mostre o contador com outra cor.
//    Se você passar os 130 caracteres, mostre o contador com outra cor.
//    Se você passar os 140 caracteres, mostre o contador em negativo.
//Versão 0.0.4
//    Ao pressionar enter (/n) aumente a área de texto de acordo com o tamanho do texto.
//Versão 0.0.5 (Extra)
//    Se o número de caracteres digitados (sem dar um "enter") exceder o tamanho da área de texto 
//por padrão, mais uma linha deverá ser adicionada para que a rolagem não apareça. (Se aplicável)
//Versão 0.0.6 (Extra)
//    Adicione a hora em que o tweet foi publicado no formato de 24 horas hh:mm.
