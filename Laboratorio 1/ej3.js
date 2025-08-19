const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
  let precioOriginal = parseFloat(precio);
  let descuento = precioOriginal * 0.15;
  let precioFinal = precioOriginal - descuento;

  console.log(`Precio original: $${precioOriginal.toFixed(2)}`);
  console.log(`Descuento (15%): $${descuento.toFixed(2)}`);
  console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);

  rl.close();
});