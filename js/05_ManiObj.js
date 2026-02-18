// OBJETOS MANIPULACION

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : false
}

// PARA REESCRIBIR UN VALOR
producto.disponible = true

// Se le puede ir añadiendo atributos al objeto aun que no
//los hayamos definido al principio.
producto.imagen = "imagen.jpg"

// Tambien podemos eliminar valores
delete producto.precio

// Como hacer que un objeto no se pueda modificar
// una vez que se ejecuta esto, no se puede modificar.
Object.freeze(producto)

// con esto si se pueden modificar los valores, pero 
// no se pueden eliminar ni añadir nuevos atributos
Object.seal(producto) 

console.log(producto)