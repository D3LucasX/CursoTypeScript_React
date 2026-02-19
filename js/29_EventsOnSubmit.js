// Eventos del DOM - On Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    // Validar formulario
    const nombre = document.querySelector('#nombre').value // Seleccionamos el imput por el id y accedemos al atributo (Al valor)
    const password = document.querySelector('#password').value 

    if(nombre === '' || password === ''){
        console.log('Todos los campos son obligatorios...')
    }else{
        console.log('Todo bien, iniciamos sesión...')
    }
})