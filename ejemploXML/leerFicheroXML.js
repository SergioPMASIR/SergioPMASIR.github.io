function gestionarFicheroXML(xmlDoc){
		let capaVacia = document.querySelector("#ficheroXML")
		let alumnos = xmlDoc.querySelectorAll("libro")
		for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i].textContent + "</p>"
		//capaVacia.innerHTML = capaVacia.innerHTML + "<p class = 'amarillo'>" + libros[i].textContent + "</p>"
}

loadDocA("libros.xml","xml");
