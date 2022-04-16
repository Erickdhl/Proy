const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');



//console.log(hamburguesa)
//console.log(menu)

hamburguesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")/* agregar la calse spreed a la calse menu */
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')/* si la calse menu contiene la clase spreed*/
     && e.target != menu && e.target != hamburguesa)/* y el elemento selecionado es distinto al menu.navegacion */
    {
        menu.classList.toggle("spread") 
    }
})



