function validacion() {
	
	indice = document.getElementById("tipodoc").selectedIndex;
	
	
	if( indice == null || indice == 0 ) {
		document.getElementById("tipodoc").style="border:thin solid red";
		alert("Por favor no ha seleccionado un tipo de documento por favor seleccione un opcion");
			
  return false;
}

doc = document.getElementById("documento").value;

if( doc.length == 0 ||  isNaN(doc)   ) {
	alert("No de documento Campo vacio o con letras por favor solo digite numeros"); 
	document.getElementById("documento").style="border:thin solid red";
  return false;
}

nombreempresa = document.getElementById("nombreempresa").value;
if( nombreempresa == null || nombreempresa.length == 0 || /^\s+$/.test(nombreempresa) ) {
		alert("Nombre de la empresa Campo vacio por favor diligencie el campo");
		document.getElementById("nombreempresa").style="border:thin solid red";
  return false;
}


nombreequipo = document.getElementById("nombreequipo").value;
if( nombreequipo == null || nombreequipo.length == 0 || /^\s+$/.test(nombreequipo) ) {
		alert(" nombre equipo Campo vacio por favor diligencie el campo");
		document.getElementById("nombreequipo").style="border:thin solid red";
  return false;
}

var telefono = document.getElementById("telefono").value;

 
 
 
 
if( !(/^\d{9}$/.test(telefono)) ) {
	alert(" telefono Campo vacio por favor diligencie el campo");
	
	
	document.getElementById("telefono").style="border:thin solid red";
  return false;
}

usuario = document.getElementById("usuario").value;
if( usuario == null || usuario.length == 0 || /^\s+$/.test(usuario) ) {
		alert(" usuario Campo vacio por favor diligencie el campo");
		document.getElementById("usuario").style="border:thin solid red";
  return false;
}

contraseña = document.getElementById("contraseña").value;
if( contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña) ) {
		alert(" contraseña Campo vacio por favor diligencie el campo");
		document.getElementById("contraseña").style="border:thin solid red";
  return false;
}







  return true;
  
}