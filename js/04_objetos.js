// OBJETOS --> colecion de propiedades clave-valor

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : false
}

// console.log(producto);
// console.log(typeof producto);
// console.table(producto); 
    // muy util para onjetos

// console.log(producto.nombre)
// con esto accedemos justo al atributo que queremos, con el punto

// ASÍ OBTENEMOS LOS VALORES DE UN OBJETO
// estas dos cosas hacen lo mismo, la segunda opción es la mas 
// moderna

// De esta manera se escribe mas.

// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// El resultado es lo mismo, pero en menos codigo
    // Esto se llama DESTRUCTURING 
// const { nombre ,precio, disponible } = producto

// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// OBJECT LITERAL ENHACEMENT es una forma de escribir objetos mas corta, es decir, si tenemos una variable con el mismo nombre que la propiedad del objeto, no es necesario escribirlo dos veces
// Muy usado en funciones cuando quieres retornar un objeto
// Como en un colegio, crear alumno, y creas el objeto y
// retornas el alumno.
const autenticado = true
const usuario = "Juan"

// const nuevoObjeto = { 
//     autenticado : autenticado,
//     usuario : usuario
// }

// las dos maneras son lo mismo, pero como tienen el mismo nom
// no hace falta esccribirlo dos veces
// solo cuando el key y el value se llaman igual.

const nuevoObjeto = { 
    autenticado ,
    usuario
}
console.log(nuevoObjeto)