$(document).ready(function() {

    $('#error').hide();

    function validaNome(nome) {
        const nomeArray = nome.split(' ');
        return nomeArray.length >= 2;
    }

    $('button').click(function(e) {

        const nome = $('#nome').val();
        if (!validaNome(nome)) {
            e.preventDefault();
            $('#error').show();
        }else {
            $('#error').hide();
        };
        

    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({

        rules: {

            nome: {
                required: true
            },

            tel: {
                required: true
            },

            email: {
                required: true
            },

            cpf: {
                required: true
            },

            cep: {
                required: true
            },

            end: {
                required: true
            },

        },

        messages: {
            email: 'Insira o seu email',
            tel: 'Digite o seu telefone',
            cpf: 'Digite o seu CPF',
            end: 'Insira o seu endereço',
            cep: 'Insira seu CEP'
        }

    })

})