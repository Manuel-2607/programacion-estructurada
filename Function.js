// Programa que pide una palabra o texto y dice cuántos caracteres tiene

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// funcion para contar caracteres
function contarCaracteres(texto) {
   return texto.length;
}

// pedir el texto al usuario
rl.question('Escriba una palabra o una cadena de texto:', (texto) => {
  const cantidad = contarCaracteres(texto);
  console.log(`El texto "${texto}" tiene ${cantidad} caracteres.`);
rl.close();
});