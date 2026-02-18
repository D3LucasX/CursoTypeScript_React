// Eventos del DOM - Clicks

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Nuevo heading al dar click'
// })
// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (event) =>{

        // Para evitar que se ejecute la acción por defecto del enlace
        //(El salto que da en la pantalla intentando acceder al enlace)
        // Básicamente previene la accion po defecto de algunos elementos
        // que realizan algo para cambiar la acción que realizan por la que
        // nosotros queremos que realicen
        event.preventDefault()

        // aqui le decimos lo que queremos que pase cuando hacemos click en
        // el enlace, en este caso que cambie el texto del enlace.
        event.target.textContent = 'Diste click'
    })
})