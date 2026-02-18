// Eventos del DOM - inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value) // para saber lo que está escribiendo, para validaciones
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword) // para ejecutar una función cada vez que se escriba algo en el input, para validaciones
// por ejemplo cuando tienes diferentes inputs y van a ejecutar la misma función
function functionPassword(){
    // Vamos a hacer una funcion para que en un type Password, nos deje
    // ver lo que vamos escribiendo durante un breve espacio de tiempo.
    inputPassword.type = "text"

    setTimeout(() => {
        inputPassword.type = "password"
    }, 300) 
}

