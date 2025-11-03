import readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function saludar(nombre){
    console.log('Hola $(nombre), bienvenido a Javascript');
}

 let resta =(n1,n2)=>{
    let res = n1-n2;
    return res;
 }
  
rl.question("Ingrese su nombre para saludarlo: ",(nom)=>{
     rl.question("Ingrese el primer numero:", (num1)=>{
          rl.question("Ingrese el número dos:", (num2)=>{

          saludar(nom);
          console.log('La resta de ambos numeros es:', resta(num1,num2));
            rl.close();
        })
    })
})
