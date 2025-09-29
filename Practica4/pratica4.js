//Ejercicio 1

function formatearPrecio(valor, moneda) {
    let opciones;
    switch (moneda) {
        case "USD":
            opciones = { style: "currency", currency: "USD" };
            break;
        case "EUR":
            opciones = { style: "currency", currency: "EUR" };
            break;
        case "MXN":
            opciones = { style: "currency", currency: "MXN" };
            break;
        default:
            return "Moneda no soportada";
    }
    return valor.toLocaleString("es-ES", opciones);
}

console.log(formatearPrecio(1234567.89, "USD")); // $1,234,567.89
console.log(formatearPrecio(1234567.89, "EUR")); // 1.234.567,89 €
// Removed invalid code as it does not belong to JavaScript and is unnecessary
console.log(formatearPrecio(1234567.89, "MXN")); // $1,234,567.89
console.log(formatearPrecio(1234567.89, "EUR")); // 1.234.567,89 €


//Ejercicio 2

function analizarParrafo(texto) {
    // Extraer todos los números (enteros y decimales)
    const numeros = Array.from(texto.matchAll(/\d+(?:\.\d+)?/g), m => parseFloat(m[0]));

    if (numeros.length === 0) {
        console.log("No se encontraron números en el párrafo.");
        return;
    }

    const promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    const mayores = numeros.filter(n => n > promedio);

    const resultado = {
        mensaje: `Números encontrados: ${numeros}`,
        cantidad: numeros.length
    };
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Cantidad de números mayores que el promedio: ${mayores.length}`);
}

// Ejemplo de uso
const texto = "En el párrafo hay 10 manzanas, 25 peras y 40 naranjas, con un total de 75 frutas.";
analizarParrafo(texto);

function validarFecha(fechaStr) {
    // Comprobar formato correcto YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(fechaStr)) {
        console.log("Formato inválido. Usa YYYY-MM-DD.");
        return;
    }

    const [year, month, day] = fechaStr.split("-").map(Number);

    // Validar rangos de mes y día
    if (month < 1 || month > 12) {
        console.log("Mes inválido.");
        return;
    }

    const diasPorMes = new Date(year, month, 0).getDate(); // último día del mes
    if (day < 1 || day > diasPorMes) {
        console.log("Día inválido para el mes.");
        return;
    }

    // Convertir a timestamp
    const timestamp = Date.parse(fechaStr);
    console.log(`Fecha válida. Timestamp: ${timestamp}`);
}

any
validarFecha("2023-02-28");  //  válido
validarFecha("2023-02-30");  //  inválido
