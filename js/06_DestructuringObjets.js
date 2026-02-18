// OBJETOS Destructuring de uno o más objetos

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : false
}

const ciente = {
    nombre : "Juan",
    premium : true,
    direccion:{
        calle: "calle España"
    }
}

// Cuando tienen el mismo nombre de atributo, da error.
// Si quieres sacar el nombre de cada objeto, los dos
// son nombre

const {nombre} = producto;
// Con los dos puntos renombramos para que no haya confusión
const {nombre:nombreCliente, direccion : {calle}} = ciente;

console.log(nombre);
console.log(nombreCliente);

console.log(calle);