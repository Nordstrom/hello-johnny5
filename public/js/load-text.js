$(document).ready(function(){

    $.get( "/api/v1/text", function( data ) {
        $( ".hello-text" ).html( data.text );
        console.log('loaded data');
        console.log(data);
    });

});