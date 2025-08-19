const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
  let precioOriginal = parseFloat(precio);
  let iva = precioOriginal * 0.13;
  let total = precioOriginal + iva;

  console.log(`Precio del producto: $${precioOriginal.toFixed(2)}`);
  console.log(`IVA (13%): $${iva.toFixed(2)}`);
  console.log(`Precio total a pagar: $${total.toFixed(2)}`);

  rl.close();
});