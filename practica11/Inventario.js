//  Array de productos
const inventario = [
    { nombre: "Manzanas", precio: 1.00, cantidad: 10 },
    { nombre: "Leche", precio: 0.80, cantidad: 0 },
    { nombre: "Arroz", precio: 1.50, cantidad: 5 },
    { nombre: "Huevos", precio: 2.40, cantidad: 12 }
];

//  Mostrar productos disponibles (cantidad > 0)
function mostrarDisponibles() {
    console.log("Productos disponibles:");
    inventario.forEach(producto => {
        if (producto.cantidad > 0) {
            console.log(`${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.cantidad}`);
        }
    });
}

//  Calcular valor total del inventario
function calcularValorTotal() {
    let total = 0;
    inventario.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}

// 4. Buscar producto por nombre
function buscarProducto(nombreBuscado) {
    const producto = inventario.find(item => item.nombre.toLowerCase() === nombreBuscado.toLowerCase());
    if (producto) {
        console.log(`Producto encontrado: ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Ejecución
mostrarDisponibles();
console.log("\nValor total del inventario: $" + calcularValorTotal());
console.log("\nBúsqueda de producto:");
buscarProducto("Arroz");
