function gestionarFicheroXML(xmlDoc){
		let capaVacia = document.querySelector("#ficheroXML")
		let derecha = xmlDoc.querySelectorAll("derecha")
		let izquierda = xmlDoc.querySelectorAll("izquierda")
		for(let i = 0; i<izquierda.length && derecha.length; i++){
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='izquierda'>" + izquierda[i].textContent + "</p"
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='derecha'>" + derecha[i].textContent + "</p>"
	}
}


loadDocA("conversacion.xml","xml");
