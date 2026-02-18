// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')


// Para cambiar el texto del heading:
heading.textContent = 'Un nuevo heading...'

let index = 0
for (const enlace of enlaces){
    enlace.textContent = `Nuevo enlace ${index++}`
}

let index2 = 0
enlaces.forEach(enlace => enlace.textContent = `Nuevo enlace lolo ${index2++}`)