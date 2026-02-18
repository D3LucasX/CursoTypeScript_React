const auth = true
// Ternaria
auth? console.log("autenticado") : console.log("Denegado")


// Operador de Cortocircuito
auth && console.log("Autenticado")

// ojo con esto porque por ejemplo si le pasas un objeto vacio, 
// se considera truthy, por lo tanto si que se ejecutaría el console.log
    const user = {}
    user && console.log("Logueado") 
    // aqui aunque haya un objeto vacio, se ejecuta el console.log 
    // porque el objeto vacio es considerado truthy
    // Si el primer operando es “falsy” (false, 0, "", null, undefined, NaN),
    //  devuelve ese valor y no evalúa el segundo operando.
    const nota = 0
    nota && console.log("Aprobado") // no se ejecuta porque 0 es falsy

// Para evitar esto, puedes usar el operador de coalescencia nula (??)
// para asignar un valor predeterminado en caso de que el valor sea 
// null o undefined:
const user2 = null
const user3 = {
    name: "Lucas",
    age: 30 
}
user2 && console.log("Usuario no definido") 
const finalUser2 = user2 ?? user3
console.log(finalUser2)

// Aqui lo que hemos hecho es que si el usuario 2 es nulo o undefined.
// entonces se le asignara el valor que tiene el usuario 3

// ?? es el operador de coalescencia nula, que devuelve el valor del 
// operando de la izquierda si no es null ni undefined, 
// de lo contrario devuelve el valor del operando de la derecha.

// RESUMEN -  Si solo quieres evaluar una condicion y no hacer nada si 
// no se cumple, el operador de cortocircuito (&&) es una buena opción.
// Si quieres asignar un valor predeterminado en caso de que una variable 
// sea null o undefined, el operador de coalescencia nula (??) es la mejor opción.
// o la ternaria si quieres evaluar una condicion y hacer algo en caso de 
// que no se cumpla.