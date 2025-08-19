const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese una cantidad en metros: ", (metros) => {
  let valorMetros = parseFloat(metros);
  let centimetros = valorMetros * 100;
  console.log(`${valorMetros} metros equivalen a ${centimetros} centímetros.`);
  rl.close();
});