$(document).ready(function() {

    var nTarefa = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const nomeTarefa = $('#nome-tarefa').val();
        var tarefas = $(`<li id="${nTarefa + 1}"></li>`);
        
        $(`<p>${nomeTarefa}</p>`).appendTo(tarefas);
        $(tarefas).appendTo('ul');

        nTarefa++;
        $('#nome-tarefa').val('');


    })

    $('ul').on('click','li',function() {

        const _id = $(this).attr('id');
        document.getElementById(_id).style = 'text-decoration: line-through';
        
    })

})