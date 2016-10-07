window.addEventListener("load", function(){
	var iconTexto = document.getElementById("iconTexto");
	var iconCita = document.getElementById("iconCita");
	var iconEnlace = document.getElementById("iconEnlace");
	var iconFrase = document.getElementById("iconFrase");
	var body = document.getElementsByTagName("body")[0];
	iconTexto.addEventListener("click", function(){
		publicarTexto();
	});
	function publicarTexto(){
		var contenedor = document.createElement("div");
		contenedor.classList.add("contenedor");
		body.insertBefore(contenedor, body.children[3]);
		var inputTexto = document.createElement("input");
		inputTexto.classList.add("input-texto");
		contenedor.insertBefore(inputTexto,contenedor.children[4]);
		var textareaTexto = document.createElement("textarea");
		textareaTexto.classList.add("textarea-texto");
		contenedor.insertBefore(textareaTexto,contenedor.children[5]);
		var btnCerrar = document.createElement("button");
		btnCerrar.classList.add("btn-cerrar");
		contenedor.insertBefore(btnCerrar,contenedor.children[6]);
		btnCerrar.textContent = "Cerrar";
		var btnPublicar = document.createElement("button");
		btnCerrar.classList.add("btn-publicar");
		contenedor.insertBefore(btnPublicar,contenedor.children[7]);
		btnPublicar.textContent = "Publicar";
	btnPublicar.addEventListener("click", function(){
		imprimirTexto();
	});
	function imprimirTexto(){
		var contenedor2 = document.createElement("div");
		contenedor2.classList.add("contenedor");
		body.insertBefore(contenedor2, body.children[4]);
		var tituloImpreso = document.createElement("div");
		tituloImpreso.classList.add("titulo-impreso");
			tituloImpreso.innerHTML = inputTexto.value;
		contenedor2.insertBefore(tituloImpreso,contenedor2.children[5]);
		var textoImpreso = document.createElement("div");
		textoImpreso.classList.add("texto-impreso");
			textoImpreso.innerHTML = textareaTexto.value;
		contenedor2.insertBefore(textoImpreso,contenedor2.children[6]);
	}
		};
});

	