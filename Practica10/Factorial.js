// Función recursiva para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Ejemplo de uso:
const resultado = factorial(5);

console.log("Resultado:", resultado);
// Debe mostrar: Resultado: 120
