const agradecerCurriculo = () => {
    alert("Seu currículo foi encaminhado ao setor de recrutamento e seleção da empresa. Havendo uma oportunidade compatível com seu perfil, entraremos em contato para uma entrevista. Caso contrário, seu cadastro permanecerá armazenado em nosso banco de dados.\nAgradecemos o seu contato. Boa sorte!")
}

let inputNome = document.getElementById("nome")
let inputEmail = document.getElementById("email")
let inputMensagem = document.getElementById("mensagem")

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(email)
}

const verificarInput = (event) => {
    event.preventDefault()
    console.log(inputNome.value)
    console.log(inputEmail.value)
    console.log(inputMensagem.value)
    if (validarEmail(inputEmail.value)) {
        alert(`Entraremos em contato através do endereço ${inputEmail.value}`)
    } else {
        alert("Nenhum endereço de e-mail foi digitado. Verifique e digite novamente!")
    }
    inputNome.value = ""
    inputEmail.value = ""
    inputMensagem.value = ""    
}

const verificarInputCadastro = () => {
    event.preventDefault()
    console.log(inputNome.value)
    console.log(inputEmail.value)
    if (validarEmail(inputEmail.value)) {
        alert(`Entraremos em contato através do endereço ${inputEmail.value}`)
    } else {
        alert("Nenhum endereço de e-mail foi digitado. Verifique e digite novamente!")
    }
    inputNome.value = ""
    inputEmail.value = ""
}


