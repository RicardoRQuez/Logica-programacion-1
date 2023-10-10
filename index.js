const prompt = require('prompt-sync')();

//No cambiar el nombre de la función ordenarNumeros

const numero1 = parseInt(prompt("Ingrese el primer número: "));
const numero2 = parseInt(prompt("Ingrese el segundo número: "))
const numero3 = parseInt(prompt("Ingrese el tercer número: "))

function ordenarNumeros(num1, num2, num3) {
  let mayor = Math.max(num1, num2, num3);
  let menor = Math.min(num1, num2, num3);
  let centro = num1 + num2 + num3 - mayor - menor
    

  

// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}
const resultado = ordenarNumeros(numero1, numero2, numero3);

console.log(resultado.ordenMayorAMenor);
console.log(resultado.ordenMenorAMayor);



module.exports = ordenarNumeros;