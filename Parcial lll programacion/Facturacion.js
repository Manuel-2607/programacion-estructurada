const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [];
let subtotal = 0;

// Función para preguntar datos
function preguntar(pregunta) {
    return new Promise(resolve => rl.question(pregunta, resolve));
}

async function ingresarProducto() {
    console.log("\n=== INGRESO DE PRODUCTOS ===");

    while (true) {
        let nombre = await preguntar("Nombre del producto (o 'fin' para terminar): ");

        if (nombre.toLowerCase() === "fin") break;

        let precio = parseFloat(await preguntar("Precio del producto: "));
        let cantidad = parseInt(await preguntar("Cantidad comprada: "));

        let totalProducto = precio * cantidad;
        subtotal += totalProducto;

        productos.push({
            nombre,
            precio,
            cantidad,
            total: totalProducto
        });

        console.log(`Producto agregado ✔ Total: $${totalProducto.toFixed(2)}\n`);
    }

    calcularFactura();
}

function calcularDescuento(monto) {
    if (monto >= 200) return 0.15; // 15%
    if (monto >= 100) return 0.10; // 10%
    if (monto >= 50) return 0.05;  // 5%
    return 0;                      // 0%
}

function calcularFactura() {
    console.log("\n=== RESUMEN DE COMPRA ===");

    productos.forEach(p => {
        console.log(`${p.nombre} x${p.cantidad}  $${p.total.toFixed(2)}`);
    });

    console.log("\nSubtotal: $" + subtotal.toFixed(2));

    const descuento = calcularDescuento(subtotal);
    const montoDescuento = subtotal * descuento;

    console.log(`Descuento aplicado: ${descuento * 100}%  (-$${montoDescuento.toFixed(2)})`);

    const subtotalConDescuento = subtotal - montoDescuento;

    const iva = subtotalConDescuento * 0.13;
    const total = subtotalConDescuento + iva;

    console.log("IVA (13%): $" + iva.toFixed(2));
    console.log("TOTAL A PAGAR: $" + total.toFixed(2));

    rl.close();
}

ingresarProducto();
