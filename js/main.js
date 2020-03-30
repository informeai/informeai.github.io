window.addEventListener('load', function(e){
    let bars = document.querySelector('#bars');
    let menuMobile = document.querySelector('#menu-mobile');
    let liMobSobre = document.querySelector('#li-mob-sobre');
    let liMobServicos = document.querySelector('#li-mob-servicos');
    let liMobContato = document.querySelector('#li-mob-contato');
    let menu = document.querySelector('#menu');

    bars.addEventListener('click', function(e){
        menuMobile.style.display = 'flex';
    });

    liMobSobre.addEventListener('click', function(e){
        menuMobile.style.display = 'none';
    });

    liMobServicos.addEventListener('click', function(e){
        menuMobile.style.display = 'none';
    });

    liMobContato.addEventListener('click', function(e){
        menuMobile.style.display = 'none';
    });
    menu.style.boxShadow = '';
    document.addEventListener('scroll', function(e){
        let outerY = 0;
        if(window.pageYOffset >= 10){
            menuMobile.style.display = 'none';
            menu.style.boxShadow = '1px 2px 3px silver';
            outerY = window.pageYOffset;
            setInterval(function(){
                if(outerY == window.pageYOffset || window.pageYOffset <= 0){
                    menu.style.boxShadow = ''
                }
            }, 500);
        }
        
    });
});