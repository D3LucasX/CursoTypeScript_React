// Modulo de ECMAScript

// Para ello en la etiqueta de script de html hay que añadirle type = module
// y en las funciones hay que añadirle export al principio para que puedan
//  ser importadas en otros archivos y así poder utilizarlas.


// Ahora las funciones de 21_ECMAScript.js pueden ser utilizadas en otros
// archivos importándolas. Tieenen que tener el mismo nombre que el export.

import { sumar } from "./21_functions.js";

const resultado = sumar (20,10)

console.log(resultado);

// También tenemos la funcion de restar, la podemos importar, y aunque no la
// utilizo, no da error, pero en typeScript si que puede dar algún error.