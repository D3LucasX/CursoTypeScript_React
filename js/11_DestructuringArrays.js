// Destructuring Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'react.js', 'node.js'];

// esto es una forma de hacerlos
const react = tecnologias[3];

// Distructuring arrays
const [html, css, nodejs] = tecnologias
console.log(nodejs); // Esto imprime JavaScript, porque el orden es importante en los arrays, a diferencia de los objetos.

// Si no quieres crear variables que no vas a usar, porque por ejemplo estas buscando react
// Se le pone una coma por posicion que quieras saltar.
const[ , , , reactjs] = tecnologias;
console.log(reactjs); // Esto imprime react.js

// La mejor es la opción tradicional, pero a veces conviene usar esta.