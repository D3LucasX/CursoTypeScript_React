//Function Expressions

// Estas funciones no se pueden llamar antes de ser declaradas, 
// a diferencia de las funciones declaradas con la palabra reservada 
// function, que sí pueden ser llamadas antes de su declaración debido 
// al proceso de hoisting en JavaScript. Las funciones expresadas se 
// asignan a una variable, y esa variable no está disponible hasta que 
// se ejecuta la línea de código donde se define la función.

const sumar = function (numero1 = 0, numero2 = 0){
      console.log(numero1 + numero2)
}

sumar(10, 20)
sumar(300, 1)
sumar(100)

