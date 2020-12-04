window.onload = ()=>{
    sendContact()
}

sendContact = ()=> {
    let enviar = document.querySelector('#enviar')
    let nameContact = document.querySelector('#name')
    let emailContact = document.querySelector('#email')
    let msgContact = document.querySelector('#msg')

    let labelName = document.querySelector('#label-name')
    let labelEmail = document.querySelector('#label-email')
    let labelMsg = document.querySelector('#label-msg')

    let respEmail = document.querySelector('#resp-email')

    nameContact.value = ''
    emailContact.value = ''
    msgContact.value = ''

    enviar.addEventListener('click', (e)=>{
        e.preventDefault()
        
        if((nameContact != null && nameContact.value.length > 0) && (emailContact != null && emailContact.value.includes('@') && emailContact.value.length > 10) && (msgContact != null && msgContact.value.length > 9)){
            

            data = 'name='+nameContact.value+'&email='+emailContact.value+'&msg='+msgContact.value
            
            fetch('https://informeai.herokuapp.com/contact',{
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                },
                referrerPolicy: 'no-referrer',
                body: data
            }).then(resp => resp.json())
            .then(data => {console.log(data)})
            .catch(error =>{console.log(error)})

            nameContact.value = ''
            emailContact.value = ''
            msgContact.value = ''

            nameContact.style.borderColor = 'gray'
            emailContact.style.borderColor = 'gray'
            msgContact.style.borderColor = 'gray'

            labelName.style.opacity = '0'
            labelEmail.style.opacity = '0'
            labelMsg.style.opacity = '0'

            respEmail.innerHTML = 'Email enviado com sucesso.'
            respEmail.style.color = 'green'
            respEmail.style.opacity = '1'

            setTimeout(()=>{
                respEmail.style.opacity = '0'
            },2000)


        }else{

            nameContact.value = ''
            emailContact.value = ''
            msgContact.value = ''

            nameContact.style.borderColor = 'gray'
            emailContact.style.borderColor = 'gray'
            msgContact.style.borderColor = 'gray'

            labelName.style.opacity = '0'
            labelEmail.style.opacity = '0'
            labelMsg.style.opacity = '0'

            respEmail.innerHTML = 'Email não enviado.'
            respEmail.style.color = 'red'
            respEmail.style.opacity = '1'

            setTimeout(()=>{
                respEmail.style.opacity = '0'
            },2000)
        }


    })

    nameContact.addEventListener('input',(e)=>{
        
        if(e.target.value.length > 0){
            labelName.style.opacity = '1'
            
            if(e.target.value.length < 3){
                e.target.style.borderColor = 'red'
                labelName.style.color = 'red'
            }else{
                e.target.style.borderColor = '#0070ff'
                labelName.style.color = '#0070ff'


            }
        }else{
            labelName.style.opacity = '0'
            labelName.style.color = 'grey'
            e.target.style.borderColor = 'gray'
        }
    })

    emailContact.addEventListener('input',(e)=>{
        
        if(e.target.value.length > 0){
            labelEmail.style.opacity = '1'
            if(!String(e.target.value).includes('@')){
                e.target.style.borderColor = 'red'
                labelEmail.style.color = 'red'
            }else{
                e.target.style.borderColor = '#0070ff'
                labelEmail.style.color = '#0070ff'


            }
        }else{
            labelEmail.style.opacity = '0'
            labelEmail.style.color = 'gray'
            e.target.style.borderColor = 'gray'
        }
    })

    msgContact.addEventListener('input',(e)=>{
        
        if(e.target.value.length > 0){
            labelMsg.style.opacity = '1'
            if(e.target.value.length < 10){
                e.target.style.borderColor = 'red'
                labelMsg.style.color = 'red'
            }else{
                e.target.style.borderColor = '#0070ff'
                labelMsg.style.color = '#0070ff'

            }
        }else{
            labelMsg.style.opacity = '0'
            labelMsg.style.color = 'gray'
            e.target.style.borderColor = 'gray'
        }
    })
}

