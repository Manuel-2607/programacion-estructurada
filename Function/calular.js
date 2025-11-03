// Ejercicios con funciones de flecha
// Fecha: 15 de octubre

// 1. Calcular el cuadrado de un número
const cuadrado = (num) => {
    return num * num;
}

// 2. Calcular el promedio de 3 números
const promedio = (a, b, c) => {
    return (a + b + c) / 3;
}

// 3. Calcular el área de un triángulo
const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

// console.log para mostrar los resultados
console.log("Resultados:");
console.log("El cuadrado de 6 es:", cuadrado(6));
console.log("El promedio de 4, 7 y 9 es:", promedio(4, 7, 9));
console.log("El área del triángulo con base 8 y altura 5 es:", areaTriangulo(8, 5));
