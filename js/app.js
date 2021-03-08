const qs = document.querySelector.bind(document)
qs('#menu button').addEventListener('click',showMenu)

function showMenu(){
    qs('#menu ul').classList.toggle("h-full")
    qs('#menu ul').classList.toggle("ul-full")
    // qs('#menu ul').classList.toggle("contract-menu")
    qs('#menu').classList.toggle("bg-dark-light")
    qs('#menu').classList.toggle("expand-menu")
    qs('#menu button').classList.toggle("bg-close")
    // qs('#menu').classList.toggle("contract-menu")
}

window.onscroll = () => {
    if(window.scrollY > 0){
        qs('#menu').classList.add("bg-menu-gradient");
    } else {
        qs("#menu").classList.toggle("bg-menu-gradient");
    }
}
