window.onload = () => {
    openMenuTopBar();
    closeMenuTopBar();
    
}

openMenuTopBar = () => {
    let menuTopBar = document.querySelector('#menu-top-bar');
    let menuTopBarOpen = document.querySelector('#menu-top-bar-open');
    menuTopBar.addEventListener('click', ()=> {
        if(menuTopBar.classList.contains('close')){
            menuTopBar.classList.remove('close');
            menuTopBarOpen.classList.remove('close');
        }else{
            menuTopBar.classList.add('close');
            menuTopBarOpen.classList.add('close');
        }

    });
}

closeMenuTopBar = ()=> {
    let menuTopBar = document.querySelector('#menu-top-bar');
    let menuTopBarOpen = document.querySelector('#menu-top-bar-open');
    let menuAbout = document.querySelector('#menu-about');
    let menuService = document.querySelector('#menu-service');
    let menuContact = document.querySelector('#menu-contact');

    menuAbout.addEventListener('click', ()=>{
        menuTopBar.classList.add('close');
        menuTopBarOpen.classList.add('close');
    })

    menuService.addEventListener('click', ()=>{
        menuTopBar.classList.add('close');
        menuTopBarOpen.classList.add('close');
    })

    menuContact.addEventListener('click', ()=>{
        menuTopBar.classList.add('close');
        menuTopBarOpen.classList.add('close');
    })
}

