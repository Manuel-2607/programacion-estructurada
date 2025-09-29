/*
// Objetos
const persona = { 
    nombre: "C", 
    edad: 18, 
    profesion: "Estudiante", 
    saludar: function()[
        console.log("Hola, soy " + this.nombre)
   }
}
persona. saludar ();


//Objetivos
const universidad = {
    nombre: "Univo",
    ubicacion: {
        ciudad: "San Miguel",
        pais: "El Salvador"
    },
    facultades:{
        ingenieriaYarquitectura: {
            carreras: ["Ingenieria en derollo de software","Industrial", "Arquitectura"]
        }    
    }
}

*/

/* EjERCICIOS DE CLASES */
conts estudiante = {
    nombre: "Carlos",
    edad: 18,
    contacto: {
        email: "correofalso@gmail.com",
        telefono: "12345678"
    }
materias: ["programacion", "MatematicaII", "Realiadad naciomal","Fisica", "Estadistica"]
saludar: function() {
    console.log("Hola, soy " + this.nombre+" y llevo la matería de "+ this.materias[0])
} 
}
estudiante.saludar();


//Ejercicio 2
const tienda = {
    nombre: "Tienda del campo
    productos: {
        campo: {
            nombre: "carton de huevos",
            stock: 5
            precio: 7.5,
        },  
       celulares: {
            nombre: "Samsung s22+",
            stock: 10,
            precio: 450,
        }
    }
}

console.log("Nombre del producto ", tienda.productos.celulares.nombre)
console.log("Precio del producto ", tienda.productos.celulares.precio)
console.log("Cantidad de stock restante", tienda.productos.celulares.stock- 1)