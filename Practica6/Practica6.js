// Crear un array de nombres
let nombres = ["Ana", "Luis", "María", "Pedro", "Carla"];

// Mostrar el primero y el último
console.log("Primer nombre:", nombres[0]);
console.log("Último nombre:", nombres[nombres.length - 1]);

let frutas = ["Manzana", "Banana", "Naranja"];

console.log("Array inicial:", frutas);

// push → Agregar al final
frutas.push("Pera");
console.log("Después de push:", frutas);

// pop → Eliminar el último
frutas.pop();
console.log("Después de pop:", frutas);

// unshift → Agregar al inicio
frutas.unshift("Mango");
console.log("Después de unshift:", frutas);

// shift → Eliminar el primero
frutas.shift();
console.log("Después de shift:", frutas);

console.log("Primer nombre:", nombres[0]);nombre: Ana
console.log("Último nombre:", nombres[nombres.length - 1]);nombre: Carla
console.log("Array inicial:", ["Manzana", "Banana", "Naranja"]);
console.log("Después de push:", frutas);
console.log("Después de pop:", frutas);