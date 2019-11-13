$(document).ready(function(){

    $('#showoptional').on('click tap', function(e){
        e.preventDefault();
        $('.optionalblock').slideToggle('fast');
        let newstate = $('#showoptional').attr('aria-expanded') === 'false';
        let newtext = newstate ? '▲' : '▼';
        console.log(newstate);
        $('#showoptional').attr('aria-expanded', newstate);
        $('#showoptional').text(newtext);
    });

});