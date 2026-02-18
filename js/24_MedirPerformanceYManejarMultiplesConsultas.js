// Medir performance y como manejar multiple async await
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

// Consultas con async await de manera secuencial.
const consultarApi = async () => {
    try {
        const inicio = performance.now()

        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const response2 = await fetch(url2)
        const data2 = await response2.json()
        console.log(data2)

        const response3 = await fetch(url3)
        const data3 = await response3.json()
        console.log(data3)

        const fin = performance.now()

        console.log(`El tiempo de la PRIMERA función fue de ${fin - inicio} ms`)
    }catch(error){
        console.log(error.message)
    }
}
// aqui primero se ejecuta la primera consula, cuando acaba esta, se ejecuta la segunda 
// y asi sucesivamente
consultarApi()


//--------------------------------------------------------------------------------------------//
// Consultas con async await de manera simultánea.

// const consultarApi2 = async () => {
//     try {
//         const inicio = performance.now()
//         // Arrays de consultas, se ejecutan todas a la vez, y se espera a que todas acaben 
//         // para continuar con el codigo
//         const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2),
//              fetch(url3)])

//         const [data, data2, data3] = await Promise.all([response.json(), response2.json(), 
//             response3.json()])

//         console.log(data)
//         console.log(data2)
//         console.log(data3)

//         const fin = performance.now()

//         console.log(`El tiempo de la SEGUNDA función fue de ${fin - inicio} ms`)
//     }catch(error){
//         console.log(error.message)
//     }
// }
// Aqui se ejecutan todas las consultas a la vez
// Capturamos el error global


//--------------------------------------------------------------------------------------------//


// const consultarApi2 = async () => {
//     try {
//         const inicio = performance.now()
//         // Arrays de consultas, se ejecutan todas a la vez, y se espera a que todas acaben 
//         // para continuar con el codigo
//         const [response, response2, response3] = await Promise.all([fetch(url).catch(e => e), fetch(url2).catch(e => e),
//              fetch(url3).catch(e => e)])

//         const [data, data2, data3] = await Promise.all([response.json(), response2.json(), 
//             response3.json()])

//         console.log(data)
//         console.log(data2)
//         console.log(data3)

//         const fin = performance.now()

//         console.log(`El tiempo de la SEGUNDA función fue de ${fin - inicio} ms`)
//     }catch(error){
//         console.log(error.message)
//     }
// }
// en este ejemplo capturamos el error por consulta.


//--------------------------------------------------------------------------------------------//



const safeFetch = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        return { error: error.message };
    }
};

const consultarApi2 = async () => {

    const resultados = await Promise.all([
        safeFetch(url),
        safeFetch(url2),
        safeFetch(url3)
    ]);

    console.log(resultados);
};
// Finalmente creamos una consulta reutilizable con su try catch y la usamos para cada consulta.

consultarApi2()