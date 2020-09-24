window.addEventListener('load', function(e){
    var cardAutomation = document.querySelector('#card-automation')
    let cardDesign = document.querySelector('#card-design')
    let cardSoftware = document.querySelector('#card-software')
    let content = document.querySelector('#content')
    let foot = document.querySelector('#foot')
    let lightDark = document.querySelector('#light-dark')

    lightDark.addEventListener('click', function(e){
        
        if(e.target.dataset.theme == 'light'){
            
            e.target.dataset.theme = 'dark'
            e.target.classList = 'far fa-moon'
            content.classList.remove('light')
            content.classList.add('dark')
            document.body.style.backgroundColor = '#111'
            foot.style.backgroundColor = '#111'
            foot.style.color = '#fafafa'
        }else{
            
            e.target.dataset.theme = 'light'
            e.target.classList = 'far fa-sun'
            content.classList.remove('dark')
            content.classList.add('light')
            document.body.style.backgroundColor = '#fafafa'
            foot.style.backgroundColor = '#fafafa'
            foot.style.color = '#111'
        }
    })

    cardAutomation.addEventListener('click', function(event){

        cardAutomation.style.backgroundColor = '#0070ff'
        cardAutomation.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100%'
                item.firstChild.style.height = '100%'
                item.firstChild.style.borderTopLeftRadius = '30px'
                item.firstChild.style.borderTopRightRadius = '30px'
            }else if(item.classList == 'card-title'){
                item.style.color = '#fff'
            }else if(item.classList == 'card-text'){
                item.style.color = '#fff'
            }
        
        })

        cardDesign.style.backgroundColor = '#ffffff'
        cardDesign.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
        cardSoftware.style.backgroundColor = '#ffffff'
        cardSoftware.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
    })

    

    cardDesign.addEventListener('click', function(event){

        
        cardDesign.style.backgroundColor = '#0070ff'
        cardDesign.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100%'
                item.firstChild.style.height = '100%'
                item.firstChild.style.borderTopLeftRadius = '30px'
                item.firstChild.style.borderTopRightRadius = '30px'
            }else if(item.classList == 'card-title'){
                item.style.color = '#fff'
            }else if(item.classList == 'card-text'){
                item.style.color = '#fff'
            }
        
        })
        
        cardAutomation.style.backgroundColor = '#ffffff'
        cardAutomation.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
        cardSoftware.style.backgroundColor = '#ffffff'
        cardSoftware.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
    })

    cardSoftware.addEventListener('click', function(event){

        
        cardSoftware.style.backgroundColor = '#0070ff'
        cardSoftware.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100%'
                item.firstChild.style.height = '100%'
                item.firstChild.style.borderTopLeftRadius = '30px'
                item.firstChild.style.borderTopRightRadius = '30px'
            }else if(item.classList == 'card-title'){
                item.style.color = '#fff'
            }else if(item.classList == 'card-text'){
                item.style.color = '#fff'
            }
        
        })

        cardAutomation.style.backgroundColor = '#ffffff'
        cardAutomation.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
        cardDesign.style.backgroundColor = '#ffffff'
        cardDesign.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
        
    })
    // Evento de Scroll
    document.addEventListener('scroll', function(e){
        cardAutomation.style.backgroundColor = '#ffffff'
        cardAutomation.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })

        cardDesign.style.backgroundColor = '#ffffff'
        cardDesign.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })

        cardSoftware.style.backgroundColor = '#ffffff'
        cardSoftware.childNodes.forEach(function(item){
            if(item.classList == 'card-giga'){
                item.firstChild.style.width = '100px'
                item.firstChild.style.height = '100px'
                item.firstChild.style.borderRadius = '50%'
            }else if(item.classList == 'card-title'){
                item.style.color = '#000000'
            }else if(item.classList == 'card-text'){
                item.style.color = '#666666'
            }
        })
    })

    
});
