const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la primera nota: ", (n1) => {
  rl.question("Ingrese la segunda nota: ", (n2) => {
    rl.question("Ingrese la tercera nota: ", (n3) => {
      let nota1 = parseFloat(n1);
      let nota2 = parseFloat(n2);
      let nota3 = parseFloat(n3);

      let promedio = (nota1 + nota2 + nota3) / 3;

      console.log(`Notas ingresadas: ${nota1}, ${nota2}, ${nota3}`);
      console.log(`Promedio: ${promedio.toFixed(2)}`);

      rl.close();
    });
  });
});