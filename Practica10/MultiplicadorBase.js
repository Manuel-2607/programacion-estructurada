// Función que crea un multiplicador a partir de una base
function crearMultiplicador(base) {
    return function (numero) {
        return base * numero;
    };
}

// Ejemplo de uso:
const multiplicarPor3 = crearMultiplicador(3);
const resultado = multiplicarPor3(5);

console.log("Resultado:", resultado); 
// Debe mostrar: Resultado: 15
