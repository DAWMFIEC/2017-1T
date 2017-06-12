function mostrarDocument() {
	/*DOM:Objeto document*/
	console.log(document);
}

function porIdentificador(id){
	console.log(document.getElementById(id));
}

function porEtiqueta(tag) {
	lista = document.getElementsByTagName(tag);
	console.log(lista);

	/*Mostrar el elementos en la posición 0 y 5*/

	/*Mostrar cada uno de los elementos*/

}

function porNombreDeClase(className) {
	lista = document.getElementsByClassName(className);
	console.log(lista);

	/*Mostrar cada uno de los elementos*/
}

function cambiarEstiloImagen() {
	/*Usando los selectores adecuados, cambie la clase de las imágenes a img-thumbnail*/

}

function cambiarInnerOutter() {
	/*por Id*/

	/*Inner*/


	/*Outer*/

}

function agregarPie() {
	/*crear un footer*/

	/*Agregar la clase: footer y text-center*/
	
	/*crear un p*/
	
	/*crear texto: CinemaTu*/
	
	/*Agregar texto a p*/
	
	/*agregar titulo a footer*/
	
	/*crear un texto con el año*/
	
	/*agregar el año al titulo antes del texto de CinemaTu*/
	
	/*agregar el footer a contenedor principal*/
	
	/*reemplazar el innerElement del titulo por 2017 - CinemaTu */
	
	/*crear un nodo con texto con '2017 - CinemaTu' y reemplazar por titulo*/
	
	/*remover el footer*/


}

function redirigir() {
	/*redirigr a http://www.google.com */
	window.location.replace("http://www.google.com");
}