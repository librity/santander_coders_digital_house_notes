function dominio(string) {
  return "http://" + string;
}

let texto = "I like turtles";
console.log(texto.length);

function substituicaoRapida(string, find, replace) {
  return string.replace(find, replace);
}

function menciona(texto, palavra) {
  return texto.includes(palavra);
}

function menciona(texto, palavra) {
  if (texto.indexOf(palavra) === -1) {
    return false;
  }

  return true;
}

let texto = "Olá, sou Carlos!";
let nomeUsuario = texto.slice(9, -1);

function dobro(number) {
  return number * 2;
}

function triplo(number) {
  return number * 3;
}

function aplicar(number, callback) {
  return callback(number);
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calculadora(a, b, callback) {
  return callback(a, b);
}

function adicionarHttp(url) {
  return "http://" + url;
}

function processar(urls, callback) {
  return urls.map(url => callback(url));
}
