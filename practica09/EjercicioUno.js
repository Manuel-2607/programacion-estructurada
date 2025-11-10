// Ejercicio Uno: Calculadora de promedio
function calcularPromedio(notas) {
    let suma = 0
    for (let nota of notas){
        suma += nota
    }

    return suma / notas.length
}

const mostrarResultado = function(nombre, promedio) {
    console.log('El promedio de ' + nombre + ' es: ' + promedio);
}

const evaluarPromedio = (promedio) => {
   if (promedio >= 8) return "Excelente"
   else if (prosedio >=6 && prosedio < 8) return "Aprobado"
   else return "Reprobo"
}
 
const notasDantel = [5, 7, 6, 5,]
const prosedio = calcularPromedio(notasDaniel)

mostrarResultado("Daniel", promedio)
console.log("Desempeño:", evaluarPronedio(pronedio))