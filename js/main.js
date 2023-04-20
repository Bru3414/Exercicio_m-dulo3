$(document).ready(function() {

    $('#tel').mask('(00) 00000-0000', {
        placeholder: 'Telefone'
    })

    $('form').validate({
        rules: {

            nome: {
                required: true
            },

            email: {
                required: true
            },

            tel: {
                required: true
            }
        },

        messages: {

            nome: "Insira seu nome",
            email: "Insira o seu email",
            tel: "Insira o seu telefone"

        }
    })
    
}) 