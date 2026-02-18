const tecnologias = ['HTML', 'CSS', 'JavaScript', 'react.js', 'node.js'];
// tecnologias.push('nest.js'); // Agrega un nuevo elemento al final del array
console.log(tecnologias); // Imprime el array actualizado

// En react siempre tienes que crear o manipular tu codigo con 
// metodos que no muten o modifiquen los valores, push si que lo hace.

const nuevoArreglo = [...tecnologias, 'nest.js']
console.log(nuevoArreglo); // Imprime el nuevo array con el nuevo elemento
// esto genera un nuevo array y no modifica que original
    // const nuevoArreglo = ['nest.js', ...tecnologias]
    // Esto hace lo mismo solo que lo pone en el primer lugar.

// Ahora vamos a imprimir el arreglo pero sin el primer elemento
const tecnologias2 = tecnologias.filter(function(tech){
    if (tech !== 'HTML'){
        return tech
    }
})
console.log(tecnologias2); // Imprime el nuevo array sin el primer elemento
// Como lo asignas a un nuevo array no estas modificando nada


// Si queremos reemplazar un valor sin modificar, usamos map
const tecnologias3 = tecnologias.map(function(tech){
    if (tech=== 'node.js'){
        return 'nest.js'
    } else {
        return tech
    }
})
    // De esta manera si encuentra node lo cambia por nest, y si no
    // devuelve lo que haya encontrado y se asigna a un nuevo array.
console.log(tecnologias3); // Imprime el nuevo array con el valor reemplazado