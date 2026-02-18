// TIPOS DE DATOS

// //Undefined
// let client
// // typeof es para saber el tipo de dato de una variable
// console.log(typeof client)

// // String
// const student = "juan"
// console.log(student)
// //console.log(typeof student)

// const producto = 'monitor 20 pulgadas'
// console.log(producto)
// console.log(typeof producto)

// Number
// const number = 20
// const number2 = 20.5
// const number3 = -100
// const number4 = "1000"

// console.log(typeof number)
// console.log(typeof number2)
// console.log(typeof number3)
// console.log(typeof number4)
// console.log(number4 - number3)

// ojo con las operaciones, tienen que ser del mismo tipo de dato
// por ejemplo, un string y un numero, si pones un mas los 
// concatena

// BigInt
// const bigInt = BigInt(23837549487568947590278495275892367582490123489)
// console.log(bigInt)
// console.log(typeof bigInt)

// Boolean
// const disponible = true
// console.log(disponible)
// console.log(typeof disponible)

// Null
// const descuento = null - no es nada
// console.log(descuento)
// console.log(typeof descuento)

// let precio = undefined 
// let precio2
// console.log(precio)
// console.log(precio2)

// Symbol buenos para librerias no tanto para codigo
const primerSymbol=Symbol(30)
const segundoSymbol=Symbol(30)

console.log(primerSymbol===segundoSymbol)
// cada symbol es unico, aunque tengan el mismo valor, no son iguales
