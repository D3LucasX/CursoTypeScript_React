// Array Methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

// Filter: nos sirve para sacar un elemento del arreglo o sacar el resto 

    const nuevoArray = tecnologias.filter( (tech) => tech !== 'HTML')
        // ** recuerda que sin llaves, loq ue se busca despues de '=>' se 
        // devuelve automaticamente, es decir, no es necesario escribir 
        // 'return' ni las llaves '{}' **
    // Por lo tanto, estas generando un nuevo array con todas las tecnologíass
    // menos HTML.

    console.log(nuevoArray);    

    // También aplica para números
    //const resultado = numeros.filter(numero => numero !== 10)
        // ** fijate que si solo hay un parámetro, no hacen falta 
        // los parentesis. **

        
// Includes: nos sirve para saber si un elemento existe dentro del arreglo
        
    // const resultado = tecnologias.includes('CSS')

// Some - Devuelve si al menos uno cumple la condición
    // const resultado = numeros.some(numero => numero > 15)
    // if (resultado){
    //     console.log("Si hay elementos");
    // }else{
    //     console.log("No hay elementos")
    // }
    // ** Mas rapido y facil que comprobar el lenght y compararlo son 
    // que si es mayor a 0 **

// Find - Devuelve el primer elemento que cumle una condición
    // const resultado = numeros.find(numero => numero > 15) // devolverá 20

// Every - Retorna true o false si todos cumplen la condición
    //const resultado = numeros.every(numero => numero > 2) //true
    //const resultado = numeros.every(numero => numero > 15) //false

    // **por ejemplo tienes un listado de usuarios y quieres saber
    // si todos son mayores de edad.**

// Reduce - Retorna un acumulado del total
    const resultado = numeros.reduce((total,numero) => {
        console.log(total)
        console.log(numero)

        return total + numero
    }, 0)
    // ** En este ejemplo,total es el acumulado, y el  numero es el elemento
    // que empieza a sumar 0 al primero valor del array, para guardarlo en
    // total, para despues ir sumando y repitiendo el proceso**
    // ¡¡MUY UTIL PARA CARRITOS DE COMPRAS!!!
        //  const resultado = numeros.reduce((total,numero) => total + numero, 0)
        // ESTO ES LO MISMO PERO SIN LAS LLAVES, POR LO QUE RETORNA EL RESULTADO
        // AUTOMÁTICAMENTE.

    console.log(resultado)
// EN MDN puedes encontrar más métodos de arreglos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array