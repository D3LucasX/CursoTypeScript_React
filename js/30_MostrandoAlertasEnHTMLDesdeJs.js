// Eventos del DOM - On Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    // Validar formulario
    const nombre = document.querySelector('#nombre').value // Seleccionamos el imput por el id y accedemos al atributo (Al valor)
    const password = document.querySelector('#password').value 

    // Prevenir nuevas alertas, guardamos en la variable alertaPrevia 
    // la alerta que generamos antes, porque si volvemos a ejecutar
    // así la borramos para que aparezca solo la que se acaba de generar
    // y no la de antes mas la de ahora
    const alertaPrevia = document.querySelector('.alerta')
    // if (alertaPrevia){
    //     alertaPrevia?.remove()
    // }
    alertaPrevia?.remove() // Hace lo mismo que el if

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta', 'text.white', 'upercase', 'text-sm', 'text-center', 'p-2',
        'font-black')

    if(nombre === '' || password === ''){
        //console.log('Todos los campos son obligatorios...')
        alerta.textContent = 'Todos los campos son obligatorios...'
        alerta.classList.add('bg-red-500')
    }else{
        //console.log('Todo bien, iniciamos sesión...')
        alerta.textContent = 'Todo bien, iniciamos sesión...'
        alerta.classList.add('bg-green-500')
    }

    formulario.appendChild(alerta) 
    // Añadimos un elemento hijo al formulario ya que el formulario
    // lo tenemos seleccionado arriba. Se renderiza como un hijo del
    // formulario.

    setTimeout(() => {
        alerta.remove() // Elimina elemento de codigo HTML a los 3 segundos
    }, 3000);
})