function sumar (n1,n2){
    return n1 + n2;
}
// export function sumar (n1,n2){
//     return n1 + n2;
// }

const restar = (n1,n2) =>  n1 - n2

export{
    sumar,
    restar
}


// Los export default es para exportar una función por defecto,
// es decir, que no hace falta importarla con el mismo nombre, 
// sino que se puede importar con cualquier nombre.
// Solo puede haber una por archivo.
// Se suelen utilizar para exportar la función principal de un archivo, 
// y las demás funciones se exportan sin default.

export default function multiplicar (n1, n2){
    return n1 * n2
}

export const division = (n1,n2) => n1 / n2
