

    //ADIONANDO EVENTO PARA VARÍAVEL NOME
    nome.addEventListener('keyup', () => {
        if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        // labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
        } else {
        labelNome.setAttribute('style', 'color: white')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: white')
        validNome = true
        }
    });

    email.addEventListener('keyup', () => {
        if(email.value.length <= 2){
        labelEmail.setAttribute('style', 'color: red')
        // labelEmail.innerHTML = 'email *Insira no minimo 3 caracteres'
        email.setAttribute('style', 'border-color: red')
        validemail = false
        } else {
        labelEmail.setAttribute('style', 'color: white')
        labelEmail.innerHTML = 'email'
        email.setAttribute('style', 'border-color: white')
        validemail = true
        }
    });

    assunto.addEventListener('keyup', () => {
        if(assunto.value.length <= 2){
        labelAssunto.setAttribute('style', 'color: red')
        // labelAssunto.innerHTML = 'assunto *Insira no minimo 3 caracteres'
        assunto.setAttribute('style', 'border-color: red')
        validassunto = false
        } else {
        labelAssunto.setAttribute('style', 'color: white')
        labelAssunto.innerHTML = 'assunto'
        assunto.setAttribute('style', 'border-color: white')
        validassunto = true
        }
    });

    mensagem.addEventListener('keyup', () => {
        if(mensagem.value.length <= 2){
        labelMensagem.setAttribute('style', 'color: red')
        // labelMensagem.innerHTML = 'mensagem *Insira no minimo 3 caracteres'
        mensagem.setAttribute('style', 'border-color: red')
        validmensagem = false
        } else {
        labelMensagem.setAttribute('style', 'color: white')
        labelMensagem.innerHTML = 'mensagem'
        mensagem.setAttribute('style', 'border-color: white')
        validmensagem = true
        }
    });

    //ADIONANDO EVENTO FUNÇÃO MOSTRAR SENHA
    let btn_form =document.querySelector('#btn_dorm')
    btn_form.addEventListener('click', () =>{
        let enviar = document.querySelector('#enviar')
    })


function mandar() {
    let nome = document.querySelector('#nome').value;
    let labelNome = document.querySelector('#labelNome')

    let email = document.querySelector('#email').value;
    let labelEmail = document.querySelector('#labelEmail')

    let assunto = document.querySelector('#assunto').value;
    let labelAssunto = document.querySelector('#labelAssunto')

    let mensagem = document.querySelector('#mensagem').value;
    let labelMensagem = document.querySelector('#labelMensagem')


    if(validNome && validemail && validassunto && validmensagem){
        btn_form

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Formulário enviado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    // setInterval(msgSuccess, 6000)
    setTimeout(()=>{
        msgSuccess
    }, 6000)

    } else{
        msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de enviar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
    }

};