const qs = document.querySelector.bind(document)
qs('#menu button').addEventListener('click',showMenu)
qs('#menu-potfolio button').addEventListener('click',showMenuPortfolio) //ESMITH -- SELECCIONA EL BOTON DEL MENU DEL PORTAFOLIO

function showMenu(){
    qs('#menu ul').classList.toggle("h-full")
    qs('#menu ul').classList.toggle("ul-full")
    // qs('#menu ul').classList.toggle("contract-menu")
    qs('#menu').classList.toggle("bg-dark-light")
    qs('#menu').classList.toggle("expand-menu")
    qs('#menu button').classList.toggle("bg-close")
    // qs('#menu').classList.toggle("contract-menu")
}

//ESMITH -- FUNCION QUE SE EJECUTARA CADA QUE SE HAGA CLIC EN EL BOTON
function showMenuPortfolio() {
    qs('#menu-potfolio ul').classList.toggle("h-32") // DAMOS UN ALTO AL MENU
    qs('#menu-potfolio ul').classList.toggle("box-shadow") // LE AGREGAMOS LA SOMBRA
    qs('#menu-potfolio ul').classList.toggle("pt-2") // LE AGREGAMOS UN padding arriba
}



window.onscroll = () => {
    if(window.scrollY > 0){
        qs('#menu').classList.add("bg-menu-gradient");
    } else {
        qs("#menu").classList.toggle("bg-menu-gradient");
    }
}

/*---------
|JS-MUURI
------------*/
var grid = new Muuri('.grid-muuri',{
    items: '.item',
    showDuration: 500,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 500,
    layout: {
		rounding: false
	}
});
window.onload = () => {
	grid.refreshItems().layout();

    const categories = document.querySelectorAll('#menu-potfolio ul li')
    categories.forEach( (li)=>{

        li.addEventListener( 'click' , (e)=> {

            const select = e.target
            const option = select.getAttribute('data-option')

            qs('.item-select').classList.remove('item-select')
            qs('#menu-potfolio button span').textContent = select.textContent
            select.classList.add('item-select')
            
            let selectorShow = option=='all' ? '.grid-muuri .item' : 'div[data-categoria="'+option+'"]'

            grid.filter(selectorShow);
        } )

    } );
}


