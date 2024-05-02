'use strict'

const button = document.getElementById('logar')

const validarLogin = async ( ) => {
    const email = document.getElementById('email').value
    
    const password = document.getElementById('senha').value

    const url = 'https://back-login.vercel.app/usuarios'
    const listUsers = await fetch(url)

    const users = await listUsers.json()

    let validarUser = false

    if (email == '' || password == '') {
        alert('Preencha os campos corretamente!!')
    } else {
        users.forEach(user => {
            if(user.email == email && user.senha == password){
                validarUser = true
                window.location.href = '../pages/home.html'
            }        
        })

        if(!validarUser){
            alert('Usuário não cadastrado!!')
        }
    }

   
}

button.addEventListener('click', () => {
    validarLogin()
})