// OBJETOS Unir 2 o mas objetos

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : "Juan",
    premium : true
}

// Con los tres puntitos no te sale el producto dentro del 
// atributo cantidad, si no que lo pone al mismo nivel.
// const carrito = {
//     cantidad : 1,
//     ...producto // spread operator, los 3 puntos
// }

// Esto es lo mas usado
const nuevoObjeto = {
    producto ,
    cliente 
}
// De esta manera crea un objeto plano, pero pasa algo, como 
// los dos obj tienen nombre como atributo, reescribe el valor
    // const nuevoObjeto2 = {
    //     ...producto ,
    //     ...cliente 
    // }
// esto tambien se puede hacer asi:
    // const nuevoObjeto2 = Object.assign(producto,cliente)
console.log(nuevoObjeto);
console.log(nuevoObjeto2);
