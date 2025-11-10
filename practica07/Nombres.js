// 1. Función que recibe un array de objetos y devuelve solo los nombres
const obtenerNombres = (personas) => {
  return personas.map(persona => persona.nombre);
};

// Ejemplo de uso
const listaPersonas = [
  { nombre: "Dereck", edad: 20 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Wilfredo", edad: 30 }
];

console.log(obtenerNombres(listaPersonas)); 
// Resultado: ["Carlos", "Ana", "Luis"]


// 2. Ordenar un array de números de menor a mayor usando sort()
const numeros = [10, 3, 25, 7, 1, 99];

numeros.sort((a, b) => a - b);

console.log(numeros);
// Resultado: [1, 3, 7, 10, 25, 99]
