// Iteraciones en Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'react.js', 'node.js', 'TypeScript'];

// for (let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i]);
// }

// forEach

// Lo que va dentro de los parentesis de function, es el nombre que le quieras dar.
// si tienes un array de clientes, en los parentesis pondrías clñiente
// como el nuestro es de tecnologías, ponemos tech, en singular
tecnologias.forEach(function(tech){
    console.log(tech)
})


// map hace lo mismo pero devuelve un nuevo array, forEach no devuelve nada, solo itera sobre el array original
// y le puedes poner condición.
// map es el mas utilizado con react
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayMap);

// for ... of
for(let tech of tecnologias){
    console.log(tech);
}
// con esto obtenemos el mismo resultado que con el forEach, pero es mas limpio y fácil de leer, es el mas utilizado en la actualidad.