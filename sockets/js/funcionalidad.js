/*https://developer.mozilla.org/en-US/docs/Web/API/WebSocket*/
var ws;

function conectar() {

   ws.send("Solicitando conexion");
   $('#estado').text("Estado: Conectado :D");   
}

function mensaje(evento) {
   var mensaje_recibido = evento.data;
   var texto = document.createTextNode( ">> " + mensaje_recibido);
   $('#mensajes').append($('<p></p>').append(texto));
}

function enviarMensaje(){
   var texto = $('#texto').val();
   ws.send(texto);
   $('#texto').val('');
}

function desconectado() {
   $('#estado').text("Conexion terminada");     
}

function crearWebSocket() {
    if ("WebSocket" in window) {
        // Let us open a web socket
        ws = new WebSocket("ws://localhost:9001/cliente_nuevo");

        ws.onopen = conectar;
        ws.onmessage = mensaje;
        ws.onclose = desconectado;
    } else {
        alert("Su navegador NO soporta WebSocket!");
    }
}

$(window).load(function() {

    $('#conectar').click(function(){
      crearWebSocket();
    })
    $('#enviar').click(function(){
      enviarMensaje();
    })

});
