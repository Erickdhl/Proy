const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa');

imagenes.forEach(imagen => {

    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', e=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')/* agrega la clase show a imagenlight */
        imagenLight.classList.toggle('showImage')
        hamburguesa1.style.opacity = '1' 
    }      
})

const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen/* le da el atributo de la imagen a agregar imagen */
    contenedorLight.classList.toggle('show')/* agrega la clase show a imagenlight */
    imagenLight.classList.toggle('showImage')/* agrega la clase showimagen a agregar imagen */
    hamburguesa1.style.opacity = '0'/* cambiar la opacidad de menuhamburguesa */
}