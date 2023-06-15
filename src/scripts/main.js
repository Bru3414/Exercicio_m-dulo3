document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const corpo = document.querySelector('body');
        const botao = document.querySelector('button');

        corpo.style.backgroundColor = corpo.style.backgroundColor == "blue" ? corpo.style.backgroundColor = "red" : corpo.style.backgroundColor = "blue";
        botao.style.backgroundColor = corpo.style.backgroundColor == "blue" ? botao.style.backgroundColor = "red" : botao.style.backgroundColor = "blue";
        botao.style.color = "#fff";
        botao.style.border = "none";

    })
})