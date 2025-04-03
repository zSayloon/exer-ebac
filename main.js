$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const listaDeTarefas = $('#tarefas').val().trim();

        if (listaDeTarefas === '') return; 

        const novaTarefa = $('<li></li>').text(listaDeTarefas); 

        $('ul').append(novaTarefa).show();

        $('#tarefas').val('');
    });

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('item-animado');
    });
});
