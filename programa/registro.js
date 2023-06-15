
document.getElementById("btnRegistroVivienda").addEventListener("change",rellenarDivViviendas)
document.getElementById("registrarUsuario").addEventListener("click",registrar)

mostrar();
  function mostrar(){
    var URLactual = window.location;

    document.getElementById("adminlogin").style.display="none";
    document.getElementById("usuariologin").style.display="none";
    
    document.getElementById("cerrar").style.display="none";
    
  
    if(localStorage.getItem("funcionamiento")=="usuario")//Si eres usuario (Propietario)
    {
      //Si es Usuario
        document.getElementById("modiDatos").addEventListener("click",modificarDatosUsuario);
        document.getElementById("formDatosModificar").style.display="none";
    	document.getElementById("cerrar").style.display="";
    	document.getElementById("usuariologin").style.display="";
    	document.getElementById("registronav").style.display="none";
    	document.getElementById("loginnav").style.display="none";
      document.getElementById("adminlogin").style.display="none";
      document.getElementById("encargadologin").style.display="none";
    }else if(localStorage.getItem("funcionamiento")=="admin")
    {
      //Si es Admin
      document.getElementById("modiDatos").addEventListener("click",modificarDatosUsuario);
      document.getElementById("formDatosModificar").style.display="none";
    	document.getElementById("cerrar").style.display="";
    	document.getElementById("usuariologin").style.display="none";
      document.getElementById("usuariologin").style.display="none";
    	document.getElementById("registronav").style.display="none";
    	document.getElementById("loginnav").style.display="none";
      document.getElementById("adminlogin").style.display="";
      document.getElementById("encargadologin").style.display="none";

    }else if(localStorage.getItem("funcionamiento")=="encargado"){
      //Si es Encargado
      document.getElementById("modiDatos").addEventListener("click",modificarDatosUsuario);
      document.getElementById("formDatosModificar").style.display="none";
    	document.getElementById("cerrar").style.display="";
    	document.getElementById("usuariologin").style.display="none";
      document.getElementById("usuariologin").style.display="none";
    	document.getElementById("registronav").style.display="none";
    	document.getElementById("loginnav").style.display="none";
      document.getElementById("adminlogin").style.display="none";
      document.getElementById("encargadologin").style.display="";
    }
    
}
var divMiembros=document.getElementById("miembros");
var comboFamilia=document.getElementById("nFamiliares");
comboFamilia.addEventListener("change",generarCampos);
document.getElementById("cerrar").style.display="none";

/*
function rellenarCampos(){
    document.getElementById("viviendaregistro").style.display="none";
    fetch("./rellenar/rellenarFamilia.php")
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(rellenarComboFamilia)
      .catch(console.log);

	 
}

function rellenarComboFamilia(datos) {
	
	var comboFamilia=document.getElementsByName("comboFamilia")[0];
	 datos.forEach(familia => {

	 	var option=document.createElement("option");
          option.value=familia["id"];    
            option.text=familia["id"];
            comboFamilia.append(option);   	
  	});
}
*/

function rellenarDivViviendas(event){
	
	if (event.target.value=="Casa") //Si es una casa genero calle,numero,metros_c,od_casa
	{
		//Miembros familia=Tabla persona (dni.contraseña,nombre_persona,apellidos_persona,genero,dni_c(propietario),calle,numero,tipo(U))
		//Propietario=Tabla persona (dni.contraseña,nombre_persona,apellidos_persona,genero,dni_c(propietario),calle,numero,tipo(U))
		//Propietario=Tabla casaparticular (calle,numero,metros_c,od_casa,dni_cp(propietario))

		//Se tienen que mostrar las casas disponibles para ser habitadas por la nueva familia
		document.getElementById("viviendaCasa").style.display="";
		document.getElementById("viviendaPiso").style.display="none";
		let divPiso=document.getElementById("viviendaPiso");
		divPiso.innerHTML="";

		let divCasa=document.getElementById("viviendaCasa");
		divCasa.innerHTML="";
		//$sql = "SELECT calle,numero,metros_c,od_casa,dni_cp FROM casaparticular where dni_cp IS NULL";
		fetch("./rellenar/rellenarCasaParticularDisponible.php")
		.then(response => response.json()) 
  		.then(data => {
			let selectCasa=document.createElement("select");
			selectCasa.setAttribute('class','form-control');
			selectCasa.setAttribute('id','selectCasaRegistro');
			let option=document.createElement("option");
			option.value=null;    
			option.text="Selecciona una Casa";
			selectCasa.append(option); 
			data.forEach(casa => {

				
				let option=document.createElement("option");
				option.value=casa['calle']+"-"+casa['numero'];    
				option.text=casa['calle']+"--"+casa['numero'];
				selectCasa.append(option);  
				/*
				let calle=document.createElement("input");
    			calle.setAttribute("value", casa['calle']);

				let numero=document.createElement("input");
    			numero.setAttribute("value", casa['numero']);
				*/
				
				
			});
			divCasa.append(selectCasa);
			
			//let trTabla=document.createElement("tr");
 		 });
		
	}else if(event.target.value=="0"){
		document.getElementById("viviendaCasa").style.display="none";
		document.getElementById("viviendaPiso").style.display="none";
		let divPiso=document.getElementById("viviendaPiso");
		divPiso.innerHTML="";

		let divCasa=document.getElementById("viviendaCasa");
		divCasa.innerHTML="";
	}else{
		document.getElementById("viviendaCasa").style.display="none";
		document.getElementById("viviendaPiso").style.display="";
		let divPiso=document.getElementById("viviendaPiso");
		divPiso.innerHTML="";

		let divCasa=document.getElementById("viviendaCasa");
		divCasa.innerHTML="";
		fetch("./rellenar/rellenarPisoDisponible.php")
		.then(response => response.json()) 
  		.then(data => {
			console.log(data);
			let selectPiso=document.createElement("select");
			selectPiso.setAttribute('class','form-control');
			selectPiso.setAttribute('id','selectPisoRegistro');
			let option=document.createElement("option");
			option.value=null;    
			option.text="Selecciona un Piso";
			selectPiso.append(option); 
			data.forEach(piso => {
				
				let option=document.createElement("option");
				option.value=piso['calle']+"-"+piso['numero']+"-"+piso['escalera']+"-"+piso['planta']+"-"+piso['puerta'];    
				option.text=piso['calle']+"--"+piso['numero'];
				selectPiso.append(option);  

				
			});
			divPiso.append(selectPiso);
      		
			//let trTabla=document.createElement("tr");
 		 });
	}

	console.log(event.target.value);
}
function generarCampos(event){
	
	//document.getElementById("tablaMisViviendasCasa").style.display="none";
	//Depende de los Miembros de la familia que se necesite se crearan x campos
	
	if(event.target.value>0)
	{
		document.getElementById("miembros").style.display="";
		let div=document.getElementById("miembros");
		div.innerHTML="";
		for(let i=0; i<event.target.value; i++)
		{
			//Crear los campos

			let divAnadir=document.createElement("div");
			divAnadir.setAttribute("class", 'mb-5');
			
			let inputDni=document.createElement("input");
			inputDni.setAttribute("type", 'text');
			inputDni.setAttribute("placeholder", 'Dni');
			inputDni.setAttribute("name", 'inputDniMiembros');
			inputDni.setAttribute("class", 'form-control');

			let inputNombre=document.createElement("input");
			inputNombre.setAttribute("type", 'text');
			inputNombre.setAttribute("placeholder", 'Nombre');
			inputNombre.setAttribute("class", 'form-control');
			inputNombre.setAttribute("name", 'inputNombreMiembros');

			let inputApellidos=document.createElement("input");
			inputApellidos.setAttribute("type", 'text');
			inputApellidos.setAttribute("placeholder", 'Apellidos');
			inputApellidos.setAttribute("class", 'form-control');
			inputApellidos.setAttribute("name", 'inputApellidosMiembros');

			

			let inputGenero=document.createElement("input");
			inputGenero.setAttribute("type", 'text');
			inputGenero.setAttribute("placeholder", 'Genero');
			inputGenero.setAttribute("class", 'form-control');
			inputGenero.setAttribute("name", 'inputGeneroMiembros');

			divAnadir.append(inputDni);
			divAnadir.append(inputNombre);
			divAnadir.append(inputApellidos);
			
			divAnadir.append(inputGenero);

			div.append(divAnadir);
		}
	}else{
		document.getElementById("miembros").style.display="none";
		document.getElementById("miembros").innerHTML="";
	}
	
}

function registrar() {
	//Obtener todos los datos del usuario (controlando los datos introducidos)
	let dni=document.getElementById("dni").value;
	let contraseña=document.getElementById("contrasena").value;
	let nombre=document.getElementById("nombre").value;
	let apellidos=document.getElementById("apellidos").value;
	let genero=document.getElementById("genero").value;

	const dnipattern = /^\d{8}$/
	const generopattern = /^[HMO]$/;
    const apellidoPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
    const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
	//Comprobar los datos introducidos
	if (dnipattern.test(dni) && generopattern.test(genero) && apellidoPattern.test(apellidos) && nombrePattern.test(nombre) && document.getElementById("btnRegistroVivienda").value!="0") {
		
		if(document.getElementById("selectCasaRegistro")!=null)
		{
			//Obtener datos de la casa seleccionada
			let selectCasa=document.getElementById("selectCasaRegistro");
			var cadena = selectCasa.value;
			var partes = cadena.split("-");

			let calle=partes[0];
			let numero=partes[1];
			if(calle!="null")
			{
				//Hay que crear a la persona, la familia, añadirla en todas las tablas correspondientes y añadirle la casa como propietario
			let datos=new FormData();
			datos.append("dni",dni);
			datos.append("contra",contraseña);
			datos.append("nombre",nombre);
			datos.append("apellidos",apellidos);
			datos.append("genero",genero);
			datos.append("calle",calle);
			datos.append("numero",numero);
			datos.append("casa","casa");

			//Añado ahora a los miembros de la familia
			let arrayDNI=[];
			document.getElementsByName("inputDniMiembros").forEach(inputDni => {
				console.log(inputDni.value);
				
					arrayDNI.push(inputDni.value);
				
			});

			let arrayNombre=[]
			document.getElementsByName("inputNombreMiembros").forEach(inputNombre => {
				console.log(inputNombre.value);
				
					arrayNombre.push(inputNombre.value);
				
			});

			let arrayApellidos=[]
			document.getElementsByName("inputApellidosMiembros").forEach(inputApellido => {
				console.log(inputApellido.value);
				
					arrayApellidos.push(inputApellido.value);
				
			});

			
			let arrayGenero=[]
			document.getElementsByName("inputGeneroMiembros").forEach(inputGenero => {
				console.log(inputGenero.value);
				arrayGenero.push(inputGenero.value);
				
			});
			let booleanCorrectoMiembros=true;
			for (let i = 0; i < arrayNombre.length; i++) {
				if (!dnipattern.test(arrayDNI[i]) || !generopattern.test(arrayGenero[i]) || !apellidoPattern.test(arrayApellidos[i]) || !nombrePattern.test(arrayNombre[i]))
				{
					booleanCorrectoMiembros=false
				}
			  }

			   
				if(booleanCorrectoMiembros)
				{
					datos.append("arrayDNI",JSON.stringify(arrayDNI));
			datos.append("arrayNombre",JSON.stringify(arrayNombre));
			datos.append("arrayApellidos",JSON.stringify(arrayApellidos));
			
			datos.append("arrayGenero",JSON.stringify(arrayGenero));
			//Añado ahora a los miembros de la familia

			fetch("./register/registrar.php", {
				method: "POST", //Le envio los datos a update por esa razon es POST
				body: datos,
			})
				.then((res) => res.json())//Obtengo respuesta
				.then((datos) => {//Esto me lo da registrar.php mediante json_encode
				if (datos === "error") {
					
					console.log("Se ha producido un error Insertando");
				} else {
					console.log("Insercción correcta");
					
				}
				});
				window.location.href = "index.html";
				}else{
					alert("datos de los miembros incorrectos");
				}
				
			
			}else{
				alert("Seleccione una Casa");
			}
			
		}

		if(document.getElementById("selectPisoRegistro")!=null)
		{
			//Si ha seleccionado Piso
			//Obtener datos de la casa seleccionada
			let selectPiso=document.getElementById("selectPisoRegistro");
			var cadena = selectPiso.value;
			var partes = cadena.split("-");

			let calle=partes[0];
			let numero=partes[1];
			let escalera=partes[2];
			let planta=partes[3];
			let puerta=partes[4];
			
			if(calle!="null")
			{
				//Hay que crear a la persona, la familia, añadirla en todas las tablas correspondientes y añadirle la casa como propietario
			let datos=new FormData();
			datos.append("dni",dni);
			datos.append("contra",contraseña);
			datos.append("nombre",nombre);
			datos.append("apellidos",apellidos);
			datos.append("genero",genero);
			datos.append("calle",calle);
			datos.append("numero",numero);
			datos.append("escalera",escalera);
			datos.append("planta",planta);
			datos.append("puerta",puerta);
			
			//Añado ahora a los miembros de la familia
			let arrayDNI=[];
			document.getElementsByName("inputDniMiembros").forEach(inputDni => {
				console.log(inputDni.value);
				
					arrayDNI.push(inputDni.value);
				
			});

			let arrayNombre=[]
			document.getElementsByName("inputNombreMiembros").forEach(inputNombre => {
				console.log(inputNombre.value);
				
					arrayNombre.push(inputNombre.value);
				
			});

			let arrayApellidos=[]
			document.getElementsByName("inputApellidosMiembros").forEach(inputApellido => {
				console.log(inputApellido.value);
				
					arrayApellidos.push(inputApellido.value);
				
			});

			

			let arrayGenero=[]
			document.getElementsByName("inputGeneroMiembros").forEach(inputGenero => {
				console.log(inputGenero.value);
				arrayGenero.push(inputGenero.value);
				
			});
			
			let booleanCorrectoMiembros=true;
			for (let i = 0; i < arrayNombre.length; i++) {
				if (!dnipattern.test(arrayDNI[i]) || !generopattern.test(arrayGenero[i]) || !apellidoPattern.test(arrayApellidos[i]) || !nombrePattern.test(arrayNombre[i]))
				{
					booleanCorrectoMiembros=false
				}
			  }
			  if(booleanCorrectoMiembros)
				{

					datos.append("arrayDNI",JSON.stringify(arrayDNI));
					datos.append("arrayNombre",JSON.stringify(arrayNombre));
					datos.append("arrayApellidos",JSON.stringify(arrayApellidos));
					
					datos.append("arrayGenero",JSON.stringify(arrayGenero));
					//Añado ahora a los miembros de la familia

					fetch("./register/registrar.php", {
						method: "POST", //Le envio los datos a update por esa razon es POST
						body: datos,
					})
						.then((res) => res.json())//Obtengo respuesta
						.then((datos) => {//Esto me lo da registrar.php mediante json_encode
						if (datos === "error") {
							
							console.log("Se ha producido un error Insertando");
						} else {
							console.log("Insercción correcta");
							
				}
					
				});
				window.location.href = "index.html";
				}else{
					alert("datos de los miembros incorrectos");
				}
			
				
			}else{
				alert("Seleccione un piso");
			}
		}
	}else{
		alert("Los datos introducidos no son correctos");
	}
	
}	




