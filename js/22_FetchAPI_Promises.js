// Fetch API con promises

// Utilizamos la herramienta de JSON placeholder: jsonplaceholder.typicode.com
// Es una API falsa para pruebas y prototipos

// También puedes obtener datos de un txt o un csv con Fetch API


const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((respuesta) => {
        if (respuesta.ok) { // Si la respuesta es correcta
            return respuesta.json() // Convertimos la respuesta a formato JSON
        }
        throw new Error('No se ha podido obtener la información') // Si no es correcta, lanzamos un error
    })
    .then(data => {
        console.log(data)
    })
    .catch (error => {
        // El error qwue lanzamos se captura aquí
        console.log(error.message)
    })
    // Si aparece status 200 es que si que logró encontrarlo
    // de lo contrario el status sería 404.
