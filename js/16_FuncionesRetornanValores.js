// Funciones que retornan valores

// const sumar = function (numero1 = 0, numero2 = 0) {
//       return numero1 + numero2
// }

// si tenemos una arrow function en una sola línea, y queremos retornar
// un valor, no hace falta poner el return y las llaves, el resultado 
// de esa línea se retornará automáticamente
const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2


const resultado = sumar(10, 20)
sumar(10, 20)
sumar(300, 1)
sumar(100)

console.log(resultado)
