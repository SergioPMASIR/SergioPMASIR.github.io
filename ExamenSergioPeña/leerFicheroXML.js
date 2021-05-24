function gestionarFicheroXML(xmlDoc){
		let capaVacia = document.querySelector("#ficheroXML")
		let animal = xmlDoc.querySelectorAll("animal")
		let l = animal.length
	
		for(let i = 0; i<animal.length; i++){
			if (l % 2 == 0) {
		        capaVacia.innerHTML = capaVacia.innerHTML + "<p class='rojo'>" + animal[i].textContent + "</p">
			} else {
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='verde'>" + animal[i].textContent + "</p>"
			}
	}
}



loadDocA("conversacion.xml","xml");
