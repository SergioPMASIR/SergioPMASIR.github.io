function gestionarFicheroXML(xmlDoc){
		let capaVacia = document.querySelector("#ficheroXML")
		let par = xmlDoc.querySelectorAll("par")
		let impar = xmlDoc.querySelectorAll("impar")
		for(let i = 0; i<par.length && impar.length; i++){
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='par'>" + par[i].textContent + "</p"
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='impar'>" + derecha[i].textContent + "</p>"
	}
}


loadDocA("conversacion.xml","xml");
