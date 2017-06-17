function filtrar( event ){

    /*Filtrado de los cantantes según el ritmo*/

    let ritmo = event.data.ritmo.toLowerCase();
    $('div#artistas > div').show();
    $('div#artistas > div:not(.'+ritmo+')').hide()
    return false;
}

function cargarRitmos() {
    
    /*Carga de ritmos desde generos.xml*/

    $.ajax({
        url: 'data/generos.xml',
        error: function() {
            alert('¡error al cargar el archivo con los ritmos!')
        },
        dataType: 'xml',
        success: function(data) {
            var ul = $('<ul></ul>')
            ul.attr('class', 'lista-generos text-center');
            $('#contenedor-generos').append(ul);

            $(data).find('genero').each(function() {

                var titulo = $(this).find('titulo').text();
                var valorCantidad = $(this).find('canciones').text();
                var cantidad = " (" + valorCantidad + ")";

                let li = $('<li></li>');
                let a = $('<a></a>');
                a.attr('class', 'ritmos-latinos')
                a.click({ritmo: titulo}, filtrar);

                a.append(titulo)
                li.append(a);
                li.append(cantidad);
                ul.append(li);

            });

        },
        type: 'GET'
    });
}

function cargarArtistas() {

    /*carga de artistas desde cantantes.json*/

    $.getJSON("data/cantantes.json", function(data) {
        $.each(data, function(key, val) {
            var generos = val["generos"].join(" ");
            var div = $('<div></div>');
            div.attr('class','col-lg-3 foto-artista '+generos);
            div.css('background-image','url("img/'+val["archivo"]+'")');

            var divOverlay = $('<div></div>');
            divOverlay.attr('class','overlay');

            var divText = $('<div></div>');
            divText.attr('class','text');
            divText.text(val["nombre"]);

            divOverlay.append(divText);
            div.append(divOverlay);
            
            $('#artistas').append(div);
        });
    });
}


$(window).load(function() {

    cargarRitmos();
    cargarArtistas();

});
