pagina = document.querySelector('#pagina')
switch(pagina.value){
	case 'alumno':
	console.log('Inicio como: '+pagina.value)
	//peticion de datos del alumno ideal
	const datos = '["Ignacio", "3º 8º", "igna4399@gmail.com"]'
	const json = JSON.parse(datos)
	document.querySelector('#nombreCuenta').value = json[0]
	document.querySelector('#divisionCuenta').value = json[1]
	document.querySelector('#correoCuenta').value = json[2]
	
	/*peticion de datos del alumno final
	const op = {
		method: 'POST',
		header: {'Content-Type': 'application/json'},
		body: 'Datos'
	}
	fetch('./dataAlumno',op)
	.then(response=>{
		if(response.ok){
			console.log('respuesta de datos: Ok')
			return response.json()
		}else{
			throw new Error(response.status)
			console.log('respuesta de datos: Error')
		}
	})
	.then(data=>{ 
		json = JSON.parse(data) 
		document.querySelector('#nombreCuenta').value = json[0]
		document.querySelector('#divisionCuenta').value = json[1]
		document.querySelector('#correoCuenta').value = json[2]
	})
	.catch(err => {
		console.error('Respuesta de datos: ', err.message)
	})
 	*/
	break
}