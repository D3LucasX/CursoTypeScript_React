// Template Strings y Concatenación

const producto = "tablet de 12 pulgadas";
const precio = 400
const marca = "orange"
// si en vez del '+' pones una ',' el resultado es el mismo
console.log('El producto es: ' + producto)
// Esto lleva a muchos errores
console.log(producto + " $" + precio + " Dolares, marca: " + marca)
// Esto es lo mismo que lo anterior con template Strings
console.log(`El producto es: ${producto} $${precio} Dolares, marca: ${marca}`)
