//Versão 0.0.1
//  Crie um formulário que permita inserir um texto e um botão para "twittar".
//  Adicione um evento de click ao botão ou de submit no formulário.
//  No evento, obter o texto.
//  Adicione o texto ao HTML.

document.getElementById("inputTweet").addEventListener("keydown", buttonOff, false);
document.getElementById("inputTweet").addEventListener("keydown", counter);

function tweetar() {
    desableButton();
    //cria parágrafo para conter tweet
    var node = document.createElement("p");
    //cria texto do parágrafo pegando conteúdo do input
    var textnode = document.createTextNode(document.getElementById("inputTweet").value); 
    //adiciona contepudo do input no parágrafo
    if (inputTweet != "") {
        node.appendChild(textnode);
        document.getElementById("printedTweet").appendChild(node);
    }
    return false;
}

//Versão 0.0.2
//    Não inserir texto vazio (desativar o botão "twittar").
//    Conte o número de caracteres de forma regressiva.
//Versão 0.0.3
//    Se você passar os 140 caracteres, desative o botão.
function desableButton() {
    //desabilita botão se texto vazio
    if (document.getElementById("inputTweet").value.length == 0 || document.getElementById("inputTweet").value.length > 140) {
    document.getElementById("myButton").disabled = true;
} 
    else {
    document.getElementById("myButton").disabled = false; //deveria reabilitar o botão, mas não ta indo
    }
    return false;
}

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
