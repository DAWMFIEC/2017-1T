/*
	Mi EcmaScript

	consola web
	2+2
	'hola'
	console.log('hola')
	alert('Pop Up!')
*/

function saludar(nombre) {
  return "Intro a " + nombre; //Cuando se llama, esta funcion devuelve "Hola " y el nombre que se le ha pasado como argumento.
}

saludar("EcmaScript"); // Nos devolvera "Hola Usuario".


/*
* Funciones
* var, let y const
* BOM y DOM
* Eventos
*/
const inicial = 0;
var veces;

var main = function () { 
	/*Esta es una constante, no se puede alterar*/
	/*inicial +=1;*/
	let mensaje = 'Número de veces: ';
	let mensajeFinal = 'Gracias por los comentarios'
	veces = inicial;

	let funcionalidad = (event => {
		if ($(".comment-input input").val() !== "") {
			let $nuevoComentario = $("<p>");
			let $textoComentario = $(".comment-input input").val();
			$nuevoComentario.text($textoComentario);
			$(".comments").append($nuevoComentario);
			$(".comment-input input").val("");
		} else {
			alert("Ingrese un texto para su comentario");
		}
	});

	$(".comment-input button").on("click", function (event) { 
		/*if(veces == 0)
			alert("Primer comentario!");
		else 
			alert(mensaje + veces);
		veces+=1;*/

		/*$(".comments").append("<p>Este es un nuevo comentario</p>");*/
		
		/*let $nuevoComentario = $("<p>");
		$nuevoComentario.text("Estos comentarios son dinámicos");
		$(".comments").append($nuevoComentario);*/

		
		//funcionalidad();

	}); 

	$(".comment-input input").on("keypress", function (event) { 
	
		if(event.keyCode == 13) {
			funcionalidad();
		}
		
	});

	/*Efectos con Javascript*/

	
	$(".comment-input button").on("click", function (event) { 
		var $new_comment;
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val()); 
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		} 
	});
	

	/*Al final*/
	/*Dos eventos al dar enter en el input y click en el boton*/

	
};


/*No es posible acceder a esta variable*/
/*alert(mensajeFinal);*/
$(document).ready(main);

/*
* Conversión de tipos
*/

/*console.log('Comentario '+100)
console.log(52+ ' Comentario ')
console.log("37" + 7)
console.log("37" - 7)

console.log(parseInt("37") + 7)
console.log(parseInt("37") - 7)
*/






