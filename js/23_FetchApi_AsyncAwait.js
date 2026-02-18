// Fetch API con Async await
// Con Promises puedes o no utilizar una función, 
// pero con async await si que se necesita una funcion si o si
const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((respuesta) => {
//         if (respuesta.ok) { // Si la respuesta es correcta
//             return respuesta.json() // Convertimos la respuesta a formato JSON
//         }
//         throw new Error('No se ha podido obtener la información') // Si no es correcta, lanzamos un error
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch (error => {
//         // El error qwue lanzamos se captura aquí
//         console.log(error.message)
//     })
    // Si aparece status 200 es que si que logró encontrarlo
    // de lo contrario el status sería 404.

// Con async await
    // se pone async para que sea asíncrona y asi podemos usar await 
    // para esperar a que se resuelva la promesa y asi obtener el 
    // resultado de la consulta a la API
    
const consultarApi = async () => {
    try {
        const response = await fetch(url)
        if(response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}
// Con async await no hay catch como tal, por lo que lo tenemos que 
// meter en un try catch


consultarApi()