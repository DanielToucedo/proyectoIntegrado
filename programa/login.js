document.getElementById("cerrar").style.display="none";
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", login);
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
function login(event){
	 event.preventDefault();
  let datos = new FormData(formulario);
  
	  fetch("./login/login.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(imprimirResultadosCalle)
      .catch(console.log);
}


function imprimirResultadosCalle(datos){
	//Una vez obtenidos los resultados compruebo si se trata de un administrador o un usuario (propietario)
	
	if(datos.length==1)
	{
		if(datos[0]["tipo"]=="U")//Propietario
		{
			//Si es propietario tengo que crear una sesion de usuario para poder mostrar sus datos y poder
			//interactuar con las funciones de usuario

			localStorage.setItem("funcionamiento", "usuario");
			localStorage.setItem("usuario", datos[0]["dni"]);	
			//Redirigir a index.html pero esta vez mostrando las opciones de usuario
			location.href ='index.html';

		}else if(datos[0]["tipo"]=="A"){

			//Si es administrador tengo que crear una sesion de administrador para poder mostrar sus datos y poder
			//interactuar con las funciones de administrador
			localStorage.setItem("funcionamiento", "admin");
			localStorage.setItem("usuario", datos[0]["dni"]);	
			//Redirigir a index.html pero esta vez mostrando las opciones de admin
			location.href ='index.html';
			
		}else{
			//Los datos tienen que ser=datos[0]["tipo"]=="E"
			//Si es encargado tengo que crear una sesion de encargado para poder mostrar sus datos y poder
			//interactuar con las funciones de encargado
			localStorage.setItem("funcionamiento", "encargado");
			localStorage.setItem("usuario", datos[0]["dni"]);	
			//Redirigir a index.html pero esta vez mostrando las opciones de encargado
			location.href ='index.html';
		}
	}else{
		alert("Datos incorrectos");
			
	}
	
}




