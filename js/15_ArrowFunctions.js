// Arrow functions

// Al igual que el function expresion, no la puedes llamar antes de declararla
// Cuando la funcion solo tiene una linea puedes borrar las llaves
const sumar = (numero1 = 0, numero2 = 0) => {
      console.log(numero1 + numero2)
}

sumar(10, 20)
sumar(300, 1)
sumar(100)

