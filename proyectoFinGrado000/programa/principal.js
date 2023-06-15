
document.addEventListener("DOMContentLoaded", mostrar);
document.getElementById("cerrar").addEventListener("click",cerrar);
document.getElementById("misdatos").addEventListener("click",misdatos);
document.getElementById("mifamilia").addEventListener("click",mifamilia);
document.getElementById("misdatosadmin").addEventListener("click",misdatos);
document.getElementById("misdatosEncargado").addEventListener("click",misdatos);
document.getElementById("misviviendas").addEventListener("click",misviviendas);
document.getElementById("listadoViviendas").addEventListener("click",listaViviendas)
document.getElementById("listadoViviendasEncargado").addEventListener("click",listaViviendasEncargado)
document.getElementById("comboZonas").addEventListener("change",mostrarViviendasZona);
document.getElementById("listadoPropietaros").addEventListener("click",mispropietarios);
document.getElementById("listadoPropietarosEncargado").addEventListener("click",mispropietarios)
document.getElementById("obtenerPropietarios").addEventListener("click",obtenerPropietarios);
document.getElementById("viviendasEncargado").addEventListener("click",modViviendasEncargado);
document.getElementById("buscarUsuariosEncargado").addEventListener("click",buscarUsuarios);
document.getElementById("comboUsuariosFunciones").addEventListener("change",funcionesUsuariosEncargado);
document.getElementById("comboUsuariosEncargado").addEventListener("change",funcionesUsuariosEncargado);
document.getElementById("modTitularidadEncargado").addEventListener("click",modificarTitularidad);
document.getElementById("familiasAdmin").addEventListener("click",familiasAdmin);
document.getElementById("btnComprarCasa").addEventListener("click",comprarCasa);
document.getElementById("btnComprarPiso").addEventListener("click",comprarPiso);


document.getElementById("anadirMiembroFamilia").addEventListener("click",()=>{
  //Voy a añadir a un miembros de la familia (Tengo que sacar donde vive y el numero de la familia de la que es cabeza de familia)
  let dniNuevo=document.getElementById("dniNuevoFamiliar").value;
  let nombreNuevo=document.getElementById("nombreNuevoFamiliar").value;
  let apellidoNuevo=document.getElementById("apellidosNuevoFamiliar").value;
  let generoNuevo=document.getElementById("generoNuevoFamiliar").value;


  //Antes de nada voy a comprobar que los datos estén bien


  const dnipattern = /^\d{8}$/
	const generopattern = /^[HMO]$/;
    const apellidoPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
    const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
	//Comprobar los datos introducidos
	if (dnipattern.test(dniNuevo) && generopattern.test(generoNuevo) && apellidoPattern.test(apellidoNuevo) && nombrePattern.test(nombreNuevo)) {
    let datos=new FormData();
  datos.append("usuario",localStorage.getItem("usuario"));
  datos.append("dniNuevo",dniNuevo);
  datos.append("nombreNuevo",nombreNuevo);
  datos.append("apellidoNuevo",apellidoNuevo);
  datos.append("generoNuevo",generoNuevo);
  
  fetch("./usuario/anadirFamiliar.php", {
    method: "POST",
    body: datos,
  })
  .then(response => response.json()) // Convertir la respuesta en un objeto Blob
  .then(data => {
    console.log(data);
    
  });
  window.location.href = "index.html";
  }else{
    alert("Debe de introducir datos correctos");
  }
  
  });


document.getElementById("btnAnadirCasa").addEventListener("click",()=>{ocultar()
document.getElementById("divAnadirCasaParticular").style.display=""});

document.getElementById("logo").addEventListener("click",()=>{ocultar()
  document.getElementById("diseñoPrincipal").style.display=""});

document.getElementById("btnAnadirPiso").addEventListener("click",()=>{ocultar()
  document.getElementById("divAnadirPiso").style.display=""});

document.getElementById("btnAnadirCasaBD").addEventListener("click",anadirCasaParticular);
document.getElementById("btnAnadirPisoBD").addEventListener("click",anadirPiso);

//document.getElementById("subirFotoPiso").addEventListener("click",subirFotoPiso);

let contadorFotosCasas=0;
let contadorFotosPisos=0;
let contadorFotos=0;
function mostrar(){
    var URLactual = window.location;

    document.getElementById("adminlogin").style.display="none";
    document.getElementById("usuariologin").style.display="none";
    document.getElementById("encargadologin").style.display="none";
    document.getElementById("cerrar").style.display="none";
    
    ocultar();
    /*
    if(URLactual=="http://localhost/Curso/proyecto_fct_daniel/programa/index.html" || URLactual=="http://localhost/Curso/proyecto_fct_daniel/programa/")
    {
        ocultar();
    }
    */
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

function ocultar(){
  document.getElementById("formDatosModificar").style.display="none";
  document.getElementById("formDatosListadoViviendas").style.display="none";
  document.getElementById("formDatosListadoPropietarios").style.display="none";
  document.getElementById("tablaListadoViviendas").style.display="none";
  document.getElementById("tablaListadoPropietarios").style.display="none";
  document.getElementById("tablaMisViviendasCasa").style.display="none";
  document.getElementById("tablaMisViviendasPiso").style.display="none";
  document.getElementById("formDatosFamilia").style.display="none";
  document.getElementById("tablaListadoViviendasGerente").style.display="none";
  document.getElementById("divAnadirCasaParticular").style.display="none";
  document.getElementById("divAnadirPiso").style.display="none";
  document.getElementById("divUsuariosEncargado").style.display="none";
  document.getElementById("divTitularidadEncargado").style.display="none";
  document.getElementById("formDatosAdminFamilias").style.display="none";
}

function cerrar(){
		//Borrar sesion de cualquier tipo de usuario
    ocultar();
    
		localStorage.removeItem("funcionamiento");
		localStorage.removeItem("usuario");
		location.href ='index.html';	
}

//Datos
function misdatos(){
  ocultar();
	//Necesito hacer una llamada a mi api para obtener los datos de la tabla persona del usuario logueado
  document.getElementById("diseñoPrincipal").style.display="none";
	let datos=new FormData();
	datos.append("usuario",localStorage.getItem("usuario"))
	
	fetch("./usuario/datos.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(datosusuario)
      .catch(console.log);
}
function datosusuario(datos){
    document.getElementById("formDatosModificar").style.display="";
    document.getElementById("diseñoPrincipal").style.display="none";
	let nombre=datos[0]["nombre_persona"];
    let contrasena=datos[0]["contrasena"];
    let dni=datos[0]["dni"];
    let apellidos_persona=datos[0]["apellidos_persona"];
    let genero=datos[0]["genero"];
    let dniCabeza=datos[0]["dni_c"];

    //Se muestra el formulario datos con los datos para poder manipularlos
    
    let infoUsuario=document.getElementById("campoInformacionUsuario");
    let campoNombreUsuario=document.getElementById("campoNombreUsuario");
    let campoApellidosUsuario=document.getElementById("campoApellidosUsuario");
    let campoContrasenaUsuario=document.getElementById("campoContrasenaUsuario");
    let campoDniUsuario=document.getElementById("campoDniUsuario");
    let campoGeneroUsuario=document.getElementById("campoGeneroUsuario");

 
    if(infoUsuario.innerHTML=="")//Para que no me añada muchas veces el texto
    {
        infoUsuario.append("Datos de "+nombre);
    }
    campoNombreUsuario.value=nombre;
    campoApellidosUsuario.value=apellidos_persona;
    campoContrasenaUsuario.value=contrasena;
    campoDniUsuario.value=dni
    campoGeneroUsuario.value=genero
    
    //dniCabeza 
    console.log(dniCabeza);
}
//Datos

//Familia
function mifamilia(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
	let datos=new FormData();
	datos.append("usuario",localStorage.getItem("usuario"))
	
	fetch("./usuario/familia.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(familiausuario)
      .catch(console.log);
}

function familiausuario(datos){
  //Tengo que mostrar las personas en una tabla indicando cual es el cabeza de familia
  document.getElementById("formDatosFamilia").style.display="";
  let cuerpoTabla=document.getElementById("cuerpoTablaFamilias");
  cuerpoTabla.innerHTML="";
  datos.forEach(personas => {
    let trTabla=document.createElement("tr");
    
      
      let tdTablaNombre=document.createElement("td");
      let tdTablaApellidos=document.createElement("td");
      let tdTablaDni=document.createElement("td");
      let tdTablaSerCabeza=document.createElement("td");

      tdTablaDni.append(personas["dni"]);
      tdTablaNombre.append(personas["nombre_persona"]);
      tdTablaApellidos.append(personas["apellidos_persona"]);

      if(personas["dni"]==localStorage.getItem("usuario"))
      {
        tdTablaSerCabeza.append("Si");
      }else{
        tdTablaSerCabeza.append("No");
      }
      trTabla.append(tdTablaDni);
      trTabla.append(tdTablaNombre);
      trTabla.append(tdTablaApellidos);
      trTabla.append(tdTablaSerCabeza);
    
      cuerpoTabla.append(trTabla);
  });
}
//Familia


//Viviendas
function misviviendas(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  contadorFotosCasas=0;
  contadorFotosPisos=0;
    console.log("datos");
	let datos=new FormData();
	datos.append("usuario",localStorage.getItem("usuario"))
	
	fetch("./usuario/viviendas.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(viviendasusuario)
      .catch(console.log);
}

function viviendasusuario(datos){
    console.log(datos);
    //Tengo que rellenar las tablas segun tenga piso o casa
    
    datos.casas.forEach(elementCasa => {
      console.log(elementCasa["casaCalle"]);
    });

    console.log(datos.pisos.length);
    if(datos.pisos.length> 0)
    {

      //Antes de hacer el proceso voy a rellenar el combo de pisos disponibles
      fetch("./rellenar/rellenarPisoDisponible.php")
      .then(response => response.json()) 
        .then(data => {
        
       let selectPiso=document.getElementById("selectPisosComprar");
       selectPiso.innerHTML="";
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

      });
      //Antes de hacer el proceso voy a rellenar el combo de pisos disponibles
      //rellenar tabla piso
        document.getElementById("tablaMisViviendasPiso").style.display="";
        let cuerpoTabla=document.getElementById("cuerpoTablaPiso");
        cuerpoTabla.innerHTML="";
        let contador=1;
        
        datos.pisos.forEach(elementPisos => {
          
        
          
          let trTabla=document.createElement("tr");
          let tdTabla1=document.createElement("td");
          let tdTabla2=document.createElement("td");
          let tdTabla3=document.createElement("td");
          let tdTablaPlanta=document.createElement("td");
          let tdTabla4=document.createElement("td");
          let tdTabla5=document.createElement("td");
          let tdTabla6=document.createElement("td");
          tdTabla6.setAttribute("id","tdImagenesPisos"+contador);

          let formulario=document.createElement("form");
          let input1=document.createElement("input");
          let input2=document.createElement("input");
          let inputCalle=document.createElement("input");
          let inputNumero=document.createElement("input");
          let inputEscalera=document.createElement("input");
          let inputPlanta=document.createElement("input");
          let inputPuerta=document.createElement("input");
          formulario.setAttribute("method","post");
          formulario.setAttribute("enctype","multipart/form-data");
          formulario.setAttribute("action","./usuario/upload.php");
          input1.setAttribute("type","file");
          input1.setAttribute("name","image");
          input1.setAttribute("accept","image/*");
          input2.setAttribute("type","submit");
          input2.setAttribute("id","subirFotoPiso");

          inputCalle.setAttribute("type","hidden");
          inputNumero.setAttribute("type","hidden");
          inputEscalera.setAttribute("type","hidden");
          inputPlanta.setAttribute("type","hidden");
          inputPuerta.setAttribute("type","hidden");
          inputCalle.setAttribute("name","callePiso");
          inputNumero.setAttribute("name","numeroPiso");
          inputEscalera.setAttribute("name","escaleraPiso");
          inputPlanta.setAttribute("name","plantaPiso");
          inputPuerta.setAttribute("name","puertaPiso");
          inputCalle.setAttribute("value",elementPisos["pisoCalle"]);
          inputNumero.setAttribute("value",elementPisos["pisoNumero"]);
          inputEscalera.setAttribute("value",elementPisos["pisoEscalera"]);
          inputPlanta.setAttribute("value",elementPisos["pisoPlanta"]);
          inputPuerta.setAttribute("value",elementPisos["pisoPuerta"]);
          
          
          formulario.append(input1);
          formulario.append(input2);
          
          formulario.append(inputCalle);
          formulario.append(inputNumero);
          formulario.append(inputEscalera);
          formulario.append(inputPlanta);
          formulario.append(inputPuerta);
          

          tdTabla1.append(contador);
          tdTabla1.setAttribute("scope","row");
          tdTabla2.append(elementPisos["pisoCalle"]);
          tdTabla3.append(elementPisos["pisoNumero"]);
          tdTablaPlanta.append(elementPisos["pisoPlanta"]);
          tdTabla4.append(elementPisos["pisoEscalera"]);
          tdTabla5.append(formulario);
          

          trTabla.append(tdTabla1);
          trTabla.append(tdTabla2);
          trTabla.append(tdTabla3);
          
          trTabla.append(tdTabla4);
          trTabla.append(tdTablaPlanta);
          trTabla.append(tdTabla5);
          trTabla.append(tdTabla6);

          //Una vez que he recargardo toda la primera fila pido las fotos correspondientes y se las anado a la fila
         getFotosPisos(elementPisos["pisoCalle"],elementPisos["pisoNumero"],elementPisos["pisoEscalera"],elementPisos["pisoPlanta"],elementPisos["pisoPuerta"]);

          cuerpoTabla.append(trTabla);
          contador++;
        });
    }
      if(datos.casas.length> 0)
      {
        //Antes de hacer el proceso voy a rellenar el combo de casas disponibles
        fetch("./rellenar/rellenarCasaParticularDisponible.php", {
          method: "POST",
          body: datos,
        })
        .then(response => response.json()) // Convertir la respuesta en un objeto Blob
        .then(data => {
          //Relleno el combo con los datos que me han dado
          let selectCasa=document.getElementById("selectCasasComprar");
          selectCasa.innerHTML="";
          let option=document.createElement("option");
        option.value=null;    
        option.text="Selecciona una Casa";
        selectCasa.append(option); 
          data.forEach(casa => {
            let option=document.createElement("option");
          option.value=casa['calle']+"-"+casa['numero'];    
          option.text=casa['calle']+"--"+casa['numero'];
          selectCasa.append(option);  
          });
          

        });
        //Antes de hacer el proceso voy a rellenar el combo de casas disponibles
      //rellenar tabla casa
        document.getElementById("tablaMisViviendasCasa").style.display="";

        let cuerpoTabla=document.getElementById("cuerpoTablaCasa");
        cuerpoTabla.innerHTML="";
        let contador=1;
        
        datos.casas.forEach(elementCasa => {
          
        
          let trTabla=document.createElement("tr");
          trTabla.setAttribute("id","trCasas");
          let tdTabla1=document.createElement("td");
          let tdTabla2=document.createElement("td");
          let tdTabla3=document.createElement("td");
          let tdTabla4=document.createElement("td");
          let tdTabla5=document.createElement("td");
          tdTabla5.setAttribute("id","tdImagenesCasas"+contador);
          let formulario=document.createElement("form");
          let input1=document.createElement("input");
          let input2=document.createElement("input");
          let inputCalle=document.createElement("input");
          let inputNumero=document.createElement("input");
          
         
          formulario.setAttribute("method","post");
          formulario.setAttribute("enctype","multipart/form-data");
          formulario.setAttribute("action","./usuario/upload.php");
          input1.setAttribute("type","file");
          input1.setAttribute("name","image");
          input1.setAttribute("accept","image/*");
          input2.setAttribute("type","submit");

          inputCalle.setAttribute("type","hidden");
          inputNumero.setAttribute("type","hidden");
          inputCalle.setAttribute("name","calleCasa");
          inputNumero.setAttribute("name","numeroCasa");
          inputCalle.setAttribute("value",elementCasa["casaCalle"]);
          inputNumero.setAttribute("value",elementCasa["casaNumero"]);
         
          
          
          formulario.append(input1);
          formulario.append(input2);
          formulario.append(inputCalle);
          formulario.append(inputNumero);

          tdTabla1.append(contador);
          tdTabla1.setAttribute("scope","row");
          tdTabla2.append(elementCasa["casaCalle"]);
          tdTabla3.append(elementCasa["casaNumero"]);
          tdTabla4.append(formulario);
         
          

          trTabla.append(tdTabla1);
          trTabla.append(tdTabla2);
          trTabla.append(tdTabla3);
          trTabla.append(tdTabla4);
          trTabla.append(tdTabla5);
          
        //Una vez que he recargardo toda la primera fila pido las fotos correspondientes y se las anado a la fila
         getFotosCasa(elementCasa["casaCalle"],elementCasa["casaNumero"]);

          cuerpoTabla.append(trTabla);
          contador++;
        });
      }
      
}
       

function getFotosCasa(calle,numero){
  let datos=new FormData();
  document.getElementById("diseñoPrincipal").style.display="none";
  datos.append("calle",calle)
  datos.append("numero",numero)
	
	fetch("./usuario/fotosCasa.php", {
    method: "POST",
    body: datos,
  })
  .then(response => response.json()) // Convertir la respuesta en un objeto Blob
  .then(data => {
    contadorFotos++;
    //Crear carrousel para introducir las fotos
    let carrouselPrincipal=document.createElement("div");
    carrouselPrincipal.setAttribute("id","carousell1");
    carrouselPrincipal.setAttribute("class","carousel carousel-dark slide");
    carrouselPrincipal.setAttribute("data-bs-ride","carousel"+contadorFotos);

    let carrouselInner=document.createElement("div");
    carrouselInner.setAttribute("class","carousel-inner");

    let btnPrev=document.createElement("button");
    btnPrev.setAttribute("class","carousel-control-prev");
    btnPrev.setAttribute("type","button");
    btnPrev.setAttribute("data-bs-target","#carousell1");
    btnPrev.setAttribute("data-bs-slide","prev");

    let spanPrev1=document.createElement("span");
    spanPrev1.setAttribute("class","carousel-control-prev-icon");
    spanPrev1.setAttribute("aria-hidden","true");
    let spanPrev2=document.createElement("span");
    spanPrev2.setAttribute("class","visually-hidden");

    
    let btnNext=document.createElement("button");
    btnNext.setAttribute("class","carousel-control-next");
    btnNext.setAttribute("type","button");
    btnNext.setAttribute("data-bs-target","#carousell1");
    btnNext.setAttribute("data-bs-slide","next");

    let spanNext1=document.createElement("span");
    spanNext1.setAttribute("class","carousel-control-next-icon");
    spanNext1.setAttribute("aria-hidden","true");
    let spanNext2=document.createElement("span");
    spanNext2.setAttribute("class","visually-hidden");

    spanPrev2.append("Previous");
    spanNext2.append("Next");

    btnPrev.append(spanPrev1);
    btnPrev.append(spanPrev2);
    btnNext.append(spanNext1);
    btnNext.append(spanNext2);
    //Crear carrousel para introducir las fotos

    // Decodificar la imagen codificada en Base64 ["Recuerda que devuelve un array"]
    let contador=1;
    let url="";
    let urlSrc="";
    data["imagenes"].forEach(elementos => {

      url=[elementos["imagen"]];
      const imagen_decodificada = atob(url);
      // Crear un objeto de imagen y establecer la fuente como la imagen decodificada
      const imagen = new Image();
      imagen.src = 'data:image/jpeg;base64,' + url;

      let divItem=document.createElement("div");
      
      if(contador==1)
      {
        divItem.setAttribute("class","carousel-item active");
      }else{
        divItem.setAttribute("class","carousel-item ");
      }
    
      

      let img=document.createElement("img");
      urlSrc=imagen.src;
      img.setAttribute("src",imagen.src);
      img.setAttribute("class","img-fluid");
      url=elementos["imagen"];

      divItem.append(img);
      carrouselInner.append(divItem);
      contador++;
     
    });
    
    carrouselPrincipal.append(carrouselInner);
    carrouselPrincipal.append(btnPrev);
    carrouselPrincipal.append(btnNext);
    
    contadorFotosCasas++;
    if(contador==1)//No hay fotos
    {
      //Creo Imagen y la  introduzco
      let img=document.createElement("img");
      img.setAttribute("src","./fotos/sinfoto.gif");
      img.setAttribute("class","img-fluid");
      document.getElementById("tdImagenesCasas"+contadorFotosCasas).append(img);
    }else if(contador==2)//Solo hay una foto
    {
      //Creo Imagen y la  introduzco
      let img=document.createElement("img");
      img.setAttribute("src",urlSrc);
      img.setAttribute("class","w-50");
      document.getElementById("tdImagenesCasas"+contadorFotosCasas).append(img);
    }else{
      document.getElementById("tdImagenesCasas"+contadorFotosCasas).append(carrouselPrincipal);
    }
    
    });

  }


  function getFotosPisos(calle,numero,escalera,planta,puerta){
    let datos=new FormData();
    datos.append("calle",calle)
    datos.append("numero",numero)
    datos.append("escalera",escalera)
    datos.append("planta",planta)
    datos.append("puerta",puerta)
    
    fetch("./usuario/fotosPiso.php", {
      method: "POST",
      body: datos,
    })
    .then(response => response.json()) // Convertir la respuesta en un objeto Blob
    .then(data => {
      contadorFotos++;
      //Crear carrousel para introducir las fotos
      let carrouselPrincipal=document.createElement("div");
      carrouselPrincipal.setAttribute("id","carouselll"+contadorFotos);
      carrouselPrincipal.setAttribute("class","carousel carousel-dark slide");
      carrouselPrincipal.setAttribute("data-bs-ride","carousel");
      
      let carrouselInner=document.createElement("div");
      carrouselInner.setAttribute("class","carousel-inner");
  
      let btnPrev=document.createElement("button");
      btnPrev.setAttribute("class","carousel-control-prev");
      btnPrev.setAttribute("type","button");
      btnPrev.setAttribute("data-bs-target","#carouselll"+contadorFotos);
      btnPrev.setAttribute("data-bs-slide","prev");
  
      let spanPrev1=document.createElement("span");
      spanPrev1.setAttribute("class","carousel-control-prev-icon");
      spanPrev1.setAttribute("aria-hidden","true");
      let spanPrev2=document.createElement("span");
      spanPrev2.setAttribute("class","visually-hidden");
  
      
      let btnNext=document.createElement("button");
      btnNext.setAttribute("class","carousel-control-next");
      btnNext.setAttribute("type","button");
      btnNext.setAttribute("data-bs-target","#carouselll"+contadorFotos);
      btnNext.setAttribute("data-bs-slide","next");
  
      let spanNext1=document.createElement("span");
      spanNext1.setAttribute("class","carousel-control-next-icon");
      spanNext1.setAttribute("aria-hidden","true");
      let spanNext2=document.createElement("span");
      spanNext2.setAttribute("class","visually-hidden");
  
      spanPrev2.append("Previous");
      spanNext2.append("Next");
  
      btnPrev.append(spanPrev1);
      btnPrev.append(spanPrev2);
      btnNext.append(spanNext1);
      btnNext.append(spanNext2);
      //Crear carrousel para introducir las fotos
  
      // Decodificar la imagen codificada en Base64 ["Recuerda que devuelve un array"]
      let contador=1;
      let url="";
      let urlSrc="";
      data["imagenes"].forEach(elementos => {
  
        url=[elementos["imagen"]];
        const imagen_decodificada = atob(url);
        // Crear un objeto de imagen y establecer la fuente como la imagen decodificada
        const imagen = new Image();
        imagen.src = 'data:image/jpeg;base64,' + url;
  
        let divItem=document.createElement("div");
        
        if(contador==1)
        {
          divItem.setAttribute("class","carousel-item active");
        }else{
          divItem.setAttribute("class","carousel-item ");
        }
  
        let img=document.createElement("img");
        urlSrc=imagen.src;
        img.setAttribute("src",imagen.src);
        img.setAttribute("class","img-fluid");
        
        
        url=elementos["imagen"];
  
        divItem.append(img);
        carrouselInner.append(divItem);
        contador++;
       
      });
      
      carrouselPrincipal.append(carrouselInner);
      carrouselPrincipal.append(btnPrev);
      carrouselPrincipal.append(btnNext);
      contadorFotosPisos++;
      if(contador==1)//No hay fotos
      {
        //Creo Imagen y la  introduzco
        let img=document.createElement("img");
        img.setAttribute("src","./fotos/sinfoto.gif");
        img.setAttribute("class","img-fluid");
        document.getElementById("tdImagenesPisos"+contadorFotosPisos).append(img);
      }else if(contador==2)//Solo hay una foto
      {
        //Creo Imagen y la  introduzco
        let img=document.createElement("img");
        img.setAttribute("src",urlSrc);
        img.setAttribute("class","w-50");
        document.getElementById("tdImagenesPisos"+contadorFotosPisos).append(img);
      }else{
        document.getElementById("tdImagenesPisos"+contadorFotosPisos).append(carrouselPrincipal);
      }
      
      });
  
    }

//Viviendas

//Animación logo
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey) {
        
     document.getElementById("logo").classList.add("girar");
     
    }
  });

  document.addEventListener("keyup", function(event) {
   
    document.getElementById("logo").classList.remove("girar");

    
  });
//Animación logo


//Modificar datos usuario
function modificarDatosUsuario(){
  document.getElementById("diseñoPrincipal").style.display="none";
    let formulario = document.getElementById("FormModificar");
    //Primero necesito obtener todos los datos del form
    let dni=FormModificarDatos.dniUsuario.value;
    let nombre=FormModificarDatos.nombreUsuario.value;
    let apellidos=FormModificarDatos.apellidos.value;
    let password=FormModificarDatos.password.value;
    let genero=FormModificarDatos.genero.value;
    
    const generopattern = /^[HMO]$/;
    const apellidoPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
    const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
      // Validaciones:
      
      if (generopattern.test(genero) && apellidoPattern.test(apellidos) && nombrePattern.test(nombre) ) {
         //Enviar los datos a modificarDatos y cambiarlos
        let datos = new FormData(formulario);//Obtengo todos los datos del formulario
       
        fetch("./usuario/modificarDatos.php", {
            method: "POST", //Le envio los datos a update por esa razon es POST
            body: datos,
          })
            .then((res) => res.json())//Obtengo respuesta
            .then((datos) => {//Esto me lo da update.php mediante json_encode
              if (datos === "error") {
                
                console.log("Se ha producido un erro actualizando");
              } else {
                console.log("actualizacion correcta");
                
              }
            });
        
          /*.catch(function (err) {
              console.log(err);
            });*/
   
      } else {
        alert("Input inválido");
      }
       
        
       
    
}
//Modificar datos usuario

//Combo Zona Urbanas
function datosZonasUrbanas(){
  document.getElementById("diseñoPrincipal").style.display="none";
  fetch("./admin/zonasUrbanas.php")
    .then((res) => res.json())
    .then((data) =>  Object(data))
    .then(rellenarComboZonasUrbanas)
    .catch(console.log);
}

//Listado Viviendas
function rellenarComboZonasUrbanas(datos) {

 //borrar
 let comboZonas=document.getElementById("comboZonas");

 let optionZonas=comboZonas.children;//Me quedo con los elementos hijos del comboProductos

 let contador=0;
 while(optionZonas.length != 0)//Mientras que el comboZonas siga teniendo options que borre
 {
  
  comboZonas.remove(optionZonas[contador]);//borre la option al comboZonas
   contador++;
 }
 //borrar
  let option=document.createElement("option");
  option.value=null;    
    option.text="Seleccione una Zona";
    comboZonas.append(option);   	
  datos.forEach(zonas => {
 
    let option=document.createElement("option");
         option.value=zonas["nombre_zona"];    
           option.text=zonas["nombre_zona"];
           comboZonas.append(option);   	
   });

  
}
//Combo Zona Urbanas

function listaViviendas(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("formDatosListadoViviendas").style.display="";
  let campoInformacionViviendas=document.getElementById("campoInformacionViviendas");
  if(campoInformacionViviendas.innerHTML=="")//Para que no me añada muchas veces el texto
    {
      let h1=document.createElement("h1");
      h1.append("Listado Viviendas")
      campoInformacionViviendas.append(h1);
    }
  datosZonasUrbanas();
  
}
function mostrarViviendasZona(event){
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("tablaListadoViviendas").style.display="";
  if(event.target.value!="null")
  {
  let datos=new FormData();
	datos.append("zona",event.target.value)
	
	fetch("./admin/listadoViviendas.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(mostrarViviendas)
      .catch(console.log);
  }else{
    document.getElementById("tablaListadoViviendas").style.display="none";
  }
  
}

function mostrarViviendas(datos){
  let cuerpoTabla=document.getElementById("cuerpoTablaViviendas");
  cuerpoTabla.innerHTML="";
  let contador=1;
  
  datos.forEach(viviendas => {
    
    let trTabla=document.createElement("tr");
    let tdTabla1=document.createElement("td");
    let tdTabla2=document.createElement("td");
    let tdTabla3=document.createElement("td");
    let tdTabla4=document.createElement("td");
    let tdTabla5=document.createElement("td");
    let tdTabla6=document.createElement("td");
    let tdTabla7=document.createElement("td");

    tdTabla1.append(contador);
    tdTabla1.setAttribute("scope","row");
    tdTabla2.append(viviendas["calle"]);
    tdTabla3.append(viviendas["codigo_postal"]);
    tdTabla4.append(viviendas["metros"]);
    tdTabla5.append(viviendas["nombre_zona"]);
    tdTabla6.append(viviendas["numero"]);
    tdTabla7.append(viviendas["tipo_vivienda"]);

    trTabla.append(tdTabla1);
    trTabla.append(tdTabla2);
    trTabla.append(tdTabla3);
    trTabla.append(tdTabla4);
    trTabla.append(tdTabla5);
    trTabla.append(tdTabla6);
    trTabla.append(tdTabla7);

    

    cuerpoTabla.append(trTabla);

    contador++;
  });

  if(localStorage.getItem("funcionamiento")=="encargado"){
   
      // Crear una instancia de jsPDF
  var doc = new jsPDF();


  // Definir la posición inicial de la tabla
  var startX = 10;
  var startY = 10;

  // Definir el espacio entre las celdas
  var cellWidth = 32;
  var cellHeight = 10;

  // Dibujar la tabla

  let j=0;
  let i=0;

  doc.setFontStyle('bold'); // Poner en negrita
  var fontSize = 10;
  doc.setFontSize(fontSize); // Establecer el tamaño de fuente
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Calle", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
  j++;
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Cod Postal", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
  j++;
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Metros", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
  j++;
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Nombre Zona", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
  j++;
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Numero", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
  j++;
  doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
  doc.text("Tipo Vivienda", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
  doc.setFontStyle('normal'); // Poner en normal
  var fontSize = 8;
    datos.forEach(viviendas => {
      i++;
      j=0;
      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["calle"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++
      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["codigo_postal"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++;

      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["metros"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++;

      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["nombre_zona"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++;

      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["numero"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++;


      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
      doc.text(viviendas["tipo_vivienda"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    
      j++;
    
  });


// Guardar el PDF
doc.save('viviendas.pdf');

  }
}

//Listado Viviendas



//Listado propietarios

function rellenarSelectsPropietarios(){
  document.getElementById("diseñoPrincipal").style.display="none";
  fetch("./admin/zonasUrbanas.php")
    .then((res) => res.json())
    .then((data) =>  Object(data))
    .then(rellenarComboZonasUrbanasPropietario)
    .catch(console.log);

    fetch("./rellenar/rellenarCalleNumero.php")
    .then((res) => res.json())
    .then((data) =>  Object(data))
    .then(imprimirResultadosCalle)
    .catch(console.log);


}

function rellenarZonasViviendas(){
  document.getElementById("diseñoPrincipal").style.display="none";
  fetch("./admin/zonasUrbanas.php")
    .then((res) => res.json())
    .then((data) =>  Object(data))
    .then(rellenarComboZonasUrbanasViviendas)
    .catch(console.log);
}

function rellenarComboZonasUrbanasViviendas(datos){
  //borrar
 let comboZonas=document.getElementsByName("comboZonasViviendas");

 //Relleno el combobox solamente si no está ya relleno
 comboZonas.forEach(element => {
    if(element.children.length==0)
    {    
    datos.forEach(zonas => {
      
    let option=document.createElement("option");
         option.value=zonas["nombre_zona"];    
           option.text=zonas["nombre_zona"];
           element.append(option);  
   });
 
    }
 });
}

function rellenarComboZonasUrbanasPropietario(datos){
  //borrar
  document.getElementById("diseñoPrincipal").style.display="none";
 let comboZonas=document.getElementById("comboZonasPropietario");

 let optionZonas=comboZonas.children;//Me quedo con los elementos hijos del comboProductos

 let contador=0;
 while(optionZonas.length != 0)//Mientras que el comboZonas siga teniendo options que borre
 {
  
  comboZonas.remove(optionZonas[contador]);//borre la option al comboZonas
   contador++;
 }
 //borrar
  let option=document.createElement("option");
  option.value=null;    
    option.text="Seleccione una Zona";
    comboZonas.append(option);   	
  datos.forEach(zonas => {
 
    let option=document.createElement("option");
         option.value=zonas["nombre_zona"];    
           option.text=zonas["nombre_zona"];
           comboZonas.append(option);   	
   });
}

function imprimirResultadosCalle(datos){
  document.getElementById("diseñoPrincipal").style.display="none";
  var comboCalle=document.getElementById("comboCallePropietario");
	var comboNumero=document.getElementById("comboNumeroPropietario");
  console.log(datos);
	 //borrar
   
   let optionCalle=comboCalle.children;
  
   let contador1=0;
   while(optionCalle.length != 0)//Mientras que el comboZonas siga teniendo options que borre
   {
   
    comboCalle.remove(optionCalle[contador1]);
     contador1++;
   }

   let optionNumero=comboNumero.children;
  
   let contador2=0;
   while(optionNumero.length != 0)
   {
    
    comboNumero.remove(optionNumero[contador2]);
     contador2++;
   }
   //borrar

   let option1=document.createElement("option");
  option1.value="null";    
    option1.text="Seleccione una Calle";
    comboCalle.append(option1);
    
    let option2=document.createElement("option");
    option2.value="null";    
      option2.text="Seleccione un Numero";
      comboNumero.append(option2); 

	//Rellenar combo calle y numero
     datos.calles.forEach(calle => {
   		//Tengo que controlar que el elemento que voy a meter no este ya en el combo
   		var optionCalle=document.createElement("option");
          optionCalle.value=calle["calle"];    
            optionCalle.text=calle["calle"];
            comboCalle.append(optionCalle); 

  	});

	  datos.numeros.forEach(numero => {
   		
		//Tengo que controlar que el elemento que voy a meter no este ya en el combo
		var optionNumero=document.createElement("option");
		optionNumero.value=numero["numero"];    
		optionNumero.text=numero["numero"];
		comboNumero.append(optionNumero); 

   });

   //Rellenar combo calle y numero
}
function mispropietarios(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("formDatosListadoPropietarios").style.display="";
  let campoInformacionPropietarios=document.getElementById("campoInformacionPropietarios");
  if(campoInformacionPropietarios.innerHTML=="")//Para que no me añada muchas veces el texto
  {
    campoInformacionPropietarios.append("Propietarios");
  }
  
  //Rellenar los 3 Select
  rellenarSelectsPropietarios();

}

function obtenerPropietarios(){
  document.getElementById("diseñoPrincipal").style.display="none";
  //Necesito los campos seleccionados de los combos
  var comboZonas = document.getElementById("comboZonasPropietario");
  var selectedComboZonas = comboZonas.options[comboZonas.selectedIndex].value;

  var comboCalles = document.getElementById("comboCallePropietario");
  var selectedComboCalles = comboCalles.options[comboCalles.selectedIndex].value;

  var comboNumeros = document.getElementById("comboNumeroPropietario");
  var selectedComboNumeros = comboNumeros.options[comboNumeros.selectedIndex].value; 

  //Llamada a la API

  let datos=new FormData();
	datos.append("zona",selectedComboZonas)
  datos.append("calle",selectedComboCalles)
  datos.append("numero",selectedComboNumeros)
  
	
	fetch("./admin/listadoPropietarios.php", {
    method: "POST",
    body: datos,
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(mostrarPropietarios)
      .catch(console.log);
}


function mostrarPropietarios(datos) {
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("tablaListadoPropietarios").style.display="";
  console.log(datos);
  //Una vez obtenidos los datos monto la tabla y la muestro
  let cuerpoTabla=document.getElementById("cuerpoTablaPropietarios");
  cuerpoTabla.innerHTML="";
  let contador=0;
  datos.forEach(propietarios => {
    contador++;
    let trTabla=document.createElement("tr");
    let tdTabla1=document.createElement("td");
    let tdTabla2=document.createElement("td");
    let tdTabla3=document.createElement("td");
    let tdTabla4=document.createElement("td");
    let tdTabla5=document.createElement("td");

    tdTabla1.append(contador);
    tdTabla1.setAttribute("scope","row"); 
    tdTabla2.append(propietarios["dni"]);
    tdTabla3.append(propietarios["calle"]);
    tdTabla4.append(propietarios["numero"]);
    tdTabla5.append(propietarios["nombre_zona"]);

    trTabla.append(tdTabla1);
    trTabla.append(tdTabla2);
    trTabla.append(tdTabla3);
    trTabla.append(tdTabla4);
    trTabla.append(tdTabla5);

    
    cuerpoTabla.append(trTabla);
    
  });

  if(contador==0)
  {
    document.getElementById("tablaListadoPropietarios").style.display="none";
    alert("No hay propietarios con esas características");
  }else{

  


  if(localStorage.getItem("funcionamiento")=="encargado"){
  
    // Crear una instancia de jsPDF
    var doc = new jsPDF();


    // Definir la posición inicial de la tabla
    var startX = 10;
    var startY = 10;

    // Definir el espacio entre las celdas
    var cellWidth = 47;
    var cellHeight = 10;

    // Dibujar la tabla

    let j=0;
    let i=0;

    doc.setFontStyle('bold'); // Poner en negrita
    var fontSize = 12;
    doc.setFontSize(fontSize); // Establecer el tamaño de fuente
    doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
    doc.text("Dni", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    j++;
    doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
    doc.text("Calle", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    j++;
    doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
    doc.text("Numero", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    j++;
    doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
    doc.text("Nombre Zona", startX + j * cellWidth + 1, startY + i * cellHeight + 5);
    j++;

    doc.setFontStyle('normal'); // Poner en normal
    var fontSize = 8;
      datos.forEach(propietarios => {
        i++;
        j=0;
        doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
        doc.text(propietarios["dni"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
      
        j++
        doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
        doc.text(propietarios["calle"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
      
        j++;

        doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
        doc.text(propietarios["numero"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
      
        j++;

        doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight, 'S');
        doc.text(propietarios["nombre_zona"], startX + j * cellWidth + 1, startY + i * cellHeight + 5);
      
        j++;
});


    // Guardar el PDF
    doc.save('propietarios.pdf');
   
}
}
}

//Listados propietarios

//Listado viviendas Encargado (PDF)

function listaViviendasEncargado(){
  listaViviendas();
}
//Listado viviendas Encargado (PDF)

//Modificar viviendas Encargado

function modViviendasEncargado(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  fetch("./encargado/listadoViviendasEncargado.php", {
    method: "GET"
  })
      .then((res) => res.json())
      .then((data) =>  Object(data))
      .then(rellenarTablaModViviendas)
      .catch(console.log);

}

function rellenarTablaModViviendas(datos){

  document.getElementById("tablaListadoViviendasGerente").style.display="";
  
  //Una vez obtenidos los datos monto la tabla y la muestro
  let cuerpoTabla=document.getElementById("cuerpotablaListadoViviendasGerente");
  cuerpoTabla.innerHTML="";
  let arrayNombreZonas=[];
  
  datos.forEach(viviendas => {
    
    let trTabla=document.createElement("tr");
    let tdTabla1=document.createElement("td");
    let tdTabla2=document.createElement("td");
    let tdTabla3=document.createElement("td");
    let tdTabla4=document.createElement("td");
    let tdTabla5=document.createElement("td");
    let tdTabla6=document.createElement("td");
    let tdTabla7=document.createElement("td");

    let btnZonas=document.createElement("select");
    
    btnZonas.setAttribute("class", "form-select form-select-lg mb-3");
    btnZonas.setAttribute("aria-label", ".form-select-lg example");
    
    btnZonas.setAttribute("name", "comboZonasViviendas");
    
    
    let inputCodigoPostal=document.createElement("input");
    inputCodigoPostal.setAttribute("value", viviendas["codigo_postal"]);
    let inputMetros=document.createElement("input");
    inputMetros.setAttribute("value", viviendas["metros"]);
    let btnEditar=document.createElement("button");
    btnEditar.setAttribute("type", "submit");
    btnEditar.setAttribute("value", "Modificar");
    btnEditar.setAttribute("name","editarVivienda");
    btnEditar.setAttribute("class","btn btn-primary");
    tdTabla1.setAttribute("scope","row"); 
    tdTabla1.append(viviendas["calle"]);
    tdTabla2.append(viviendas["numero"]);
    tdTabla3.append(viviendas["tipo_vivienda"]);
    tdTabla4.append(inputCodigoPostal);
    tdTabla5.append(inputMetros);

    //Para el nombre zona quiero un combobox
    rellenarZonasViviendas();
    arrayNombreZonas.push(viviendas["nombre_zona"]);
    tdTabla6.append(btnZonas);
    tdTabla7.append(btnEditar);

    
    trTabla.append(tdTabla1);
    trTabla.append(tdTabla2);
    trTabla.append(tdTabla3);
    trTabla.append(tdTabla4);
    trTabla.append(tdTabla5);
    trTabla.append(tdTabla6);
    trTabla.append(tdTabla7);
    
    cuerpoTabla.append(trTabla);

  });

  //Añado evento a cada uno de los botones
  var botones = document.getElementsByName("editarVivienda");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", editarViviendaEncargado);
}

//Seleccionar el value de cada combo zona

setTimeout(function() {
  let contadorZonas=0;
let comboZonas=document.getElementsByName("comboZonasViviendas");
comboZonas.forEach(element => {
  element.value=arrayNombreZonas[contadorZonas];
 
  contadorZonas++;
});
}, 500);

}

function editarViviendaEncargado(event){
  let metros=event.target.parentNode.previousSibling.previousSibling.firstChild.value;
  let codigoPostal=event.target.parentNode.previousSibling.previousSibling.previousSibling.firstChild.value;
  let tipo=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let numero=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let calle=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let nombreZona=event.target.parentNode.previousSibling.firstChild.value

  //Tengo que modificar la tabla viviendas con los datos y tambíen las demas tablas donde se encuentre la vivienda
  console.log(nombreZona);
let datos=new FormData();
datos.append("metros",metros)
datos.append("codigoPostal",codigoPostal)
datos.append("numero",numero)
datos.append("tipo",tipo)
datos.append("calle",calle)
datos.append("nombreZona",nombreZona)

      fetch("./encargado/updateViviendas.php", {
        method: "POST", //Le envio los datos a update por esa razon es POST
        body: datos,
      })
        .then((res) => res.json())//Obtengo respuesta
        .then((datos) => {//Esto me lo da update.php mediante json_encode
          if (datos === "error") {
            
            console.log("Se ha producido un erro actualizando");
          } else {
            console.log("actualizacion correcta");
            
          }
        });
}
//Modificar viviendas Encargado

//Añadir viviendas
function anadirCasaParticular(){
  document.getElementById("diseñoPrincipal").style.display="none";
  let datos=new FormData();
  datos.append("metros",document.getElementById("metrosCasaParticular").value);
  datos.append("numero",document.getElementById("NumeroCasaParticular").value);
  datos.append("calle",document.getElementById("CalleCasaParticular").value);
  datos.append("codigoPostal",document.getElementById("CodigoCasaParticular").value);
  datos.append("zonaUrbana",document.getElementById("selectZonasUrbanasCasas").value);
	
	fetch("./encargado/anadirCasa.php", {
    method: "POST",
    body: datos,
  })
  .then((res) => res.json())//Obtengo respuesta
  .then((datos) => {//Esto me lo da update.php mediante json_encode
    if (datos === "error") {
      
      console.log("Se ha producido un error");
    } else {
      console.log("Vivienda añadida con exito");
      
    }
  });
  location.reload();
}

function anadirPiso(){
  let datos=new FormData();
  datos.append("metros",document.getElementById("metrosPiso").value);
  datos.append("numero",document.getElementById("NumeroPiso").value);
  datos.append("calle",document.getElementById("CallePiso").value);
  datos.append("codigoPostal",document.getElementById("CodigoPiso").value);
  datos.append("zonaUrbana",document.getElementById("selectZonasUrbanasPisos").value);
  datos.append("EscaleraPiso",document.getElementById("EscaleraPiso").value);
  datos.append("PlantaPiso",document.getElementById("PlantaPiso").value);
  datos.append("PuertaPiso",document.getElementById("PuertaPiso").value);
  
  fetch("./encargado/anadirPiso.php", {
    method: "POST",
    body: datos,
  })
  .then((res) => res.json())//Obtengo respuesta
  .then((datos) => {//Esto me lo da update.php mediante json_encode
    if (datos === "error") {
      
      console.log("Se ha producido un error");
    } else {
      console.log("Vivienda añadida con exito");
      
    }
  });
  location.reload();
 
}

//Añadir viviendas

//Busqueda usuarios
function buscarUsuarios(){
  ocultar();
  let divAnadir=document.getElementById("funcionesUsuarioEncargado");
  divAnadir.innerHTML="";
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("divUsuariosEncargado").style.display="";

  fetch("./rellenar/rellenarNombreUsuarios.php")
    .then((res) => res.json())
    .then((data) =>  Object(data))
    .then(rellenarComboUsuarios)
    .catch(console.log);

}
  
function rellenarComboUsuarios(datos){
  document.getElementById("diseñoPrincipal").style.display="none";
  let comboboxUsuarios=document.getElementById("comboUsuariosEncargado");
  let optionUsuarios=comboboxUsuarios.children;
  
   let contador1=0;
   while(optionUsuarios.length != 0)//Mientras que el comboZonas siga teniendo options que borre
   {
   
    comboboxUsuarios.remove(optionUsuarios[contador1]);
     contador1++;
   }

  datos.forEach(usuarios => {
 
    let option=document.createElement("option");
         option.value=usuarios["dni"];    
           option.text=usuarios["nombre_persona"]+"--"+usuarios["dni"];
           comboboxUsuarios.append(option);   	
   });

}

function funcionesUsuariosEncargado(){
  document.getElementById("diseñoPrincipal").style.display="none";
  let opcionUsuario=document.getElementById("comboUsuariosEncargado").value;
  let opcionFunciones= document.getElementById("comboUsuariosFunciones").value;
  let divAnadir=document.getElementById("funcionesUsuarioEncargado");
  divAnadir.innerHTML="";
    switch (opcionFunciones) {
      case "Datos":
        //Mostrar datos
        let datos=new FormData();
        datos.append("dni",opcionUsuario)
        
        fetch("./encargado/datosUsuarioBuscado.php", {
          method: "POST",
          body: datos,
        })
        .then(response => response.json()) 
        .then(data => {
          
          //Una vez tengo todos los datos muestro una tabla con los datos del usuario
          let divAnadir=document.getElementById("funcionesUsuarioEncargado");
          divAnadir.innerHTML="";
          let h2=document.createElement("h2");
         h2.append("Datos");
         divAnadir.append(h2);
          let tabla=document.createElement("table");
          tabla.setAttribute("class","table");

          let thead=document.createElement("thead");
          thead.setAttribute("thead","thead-dark"); 
          
          let tr=document.createElement("tr");

          let th1=document.createElement("th");
          th1.setAttribute("scope","col");
          th1.append("#");

          let th2=document.createElement("th");
          th2.setAttribute("scope","col");
          th2.append("DNI");

          let th3=document.createElement("th");
          th3.setAttribute("scope","col");
          th3.append("Nombre");

          let th4=document.createElement("th");
          th4.setAttribute("scope","col");
          th4.append("Calle");

          let th5=document.createElement("th");
          th5.setAttribute("scope","col");
          th5.append("Numero");

          tr.append(th1);
          tr.append(th2);
          tr.append(th3);
          tr.append(th4);
          tr.append(th5);

          thead.append(tr);

          tabla.append(thead);
          
          
          let tbody=document.createElement("tbody");
          let contador=1;
          data.forEach(elementos => {
            let trTabla=document.createElement("tr");
            let tdTabla1=document.createElement("td");
            let tdTabla2=document.createElement("td");
            let tdTabla3=document.createElement("td");
            let tdTabla4=document.createElement("td");
            let tdTabla5=document.createElement("td");

            tdTabla1.append(contador);
            tdTabla2.append(elementos["dni"]);
            tdTabla3.append(elementos["nombre_persona"]);
            tdTabla4.append(elementos["calle"]);
            tdTabla5.append(elementos["numero"]);

            trTabla.append(tdTabla1);
            trTabla.append(tdTabla2);
            trTabla.append(tdTabla3);
            trTabla.append(tdTabla4);
            trTabla.append(tdTabla5);

            tbody.append(trTabla);
            contador++;
          });

          tabla.append(tbody);
          divAnadir.append(tabla);
        })

        break;
      case "Viviendas": 

      let datoss=new FormData();
        datoss.append("usuario",opcionUsuario)
        fetch("./usuario/viviendas.php", {
          method: "POST",
          body: datoss,
        })
        .then(response => response.json()) 
        .then(data => {
          //Una vez tengo todos los datos muestro una tabla con las viviendas del usuario
          console.log(data);
          let divAnadir=document.getElementById("funcionesUsuarioEncargado");
          divAnadir.innerHTML="";
          if(data.casas.length> 0)
          {
            let divAnadir=document.getElementById("funcionesUsuarioEncargado");
            divAnadir.innerHTML="";
            let h2=document.createElement("h2");
            h2.append("Casas");
            divAnadir.append(h2);
            let tabla=document.createElement("table");
            tabla.setAttribute("class","table");
  
            let thead=document.createElement("thead");
            thead.setAttribute("thead","thead-dark"); 
            
            let tr=document.createElement("tr");
  
            let th1=document.createElement("th");
            th1.setAttribute("scope","col");
            th1.append("#");
  
            let th2=document.createElement("th");
            th2.setAttribute("scope","col");
            th2.append("Calle");
  
            let th3=document.createElement("th");
            th3.setAttribute("scope","col");
            th3.append("Numero");
  
            tr.append(th1);
            tr.append(th2);
            tr.append(th3);
            
            thead.append(tr);
  
            tabla.append(thead);
            
            
            let tbody=document.createElement("tbody");
            let contador=1;

            data.casas.forEach(casas => {
              let trTabla=document.createElement("tr");
              let tdTabla1=document.createElement("td");
              let tdTabla2=document.createElement("td");
              let tdTabla3=document.createElement("td");
             
              tdTabla1.append(contador);
              tdTabla2.append(casas["casaCalle"]);
              tdTabla3.append(casas["casaNumero"]);
            
              trTabla.append(tdTabla1);
              trTabla.append(tdTabla2);
              trTabla.append(tdTabla3);
         
              tbody.append(trTabla);
              contador++;
            });

            tabla.append(tbody);
          divAnadir.append(tabla);
            
          }

          if(data.pisos.length> 0){
            let divAnadir=document.getElementById("funcionesUsuarioEncargado");
            divAnadir.innerHTML="";
            let h2=document.createElement("h2");
            h2.append("Pisos");
            divAnadir.append(h2);
            let tabla=document.createElement("table");
            tabla.setAttribute("class","table");
  
            let thead=document.createElement("thead");
            thead.setAttribute("thead","thead-dark"); 
            
            let tr=document.createElement("tr");
  
            let th1=document.createElement("th");
            th1.setAttribute("scope","col");
            th1.append("#");
  
            let th2=document.createElement("th");
            th2.setAttribute("scope","col");
            th2.append("Calle");
  
            let th3=document.createElement("th");
            th3.setAttribute("scope","col");
            th3.append("Numero");

            let th4=document.createElement("th");
            th4.setAttribute("scope","col");
            th4.append("Escalera");

            let th5=document.createElement("th");
            th5.setAttribute("scope","col");
            th5.append("Planta");

            let th6=document.createElement("th");
            th6.setAttribute("scope","col");
            th6.append("Puerta");
  
            tr.append(th1);
            tr.append(th2);
            tr.append(th3);
            tr.append(th4);
            tr.append(th5);
            tr.append(th6);
            
            thead.append(tr);
  
            tabla.append(thead);
            
            
            let tbody=document.createElement("tbody");
            let contador=1;

            data.pisos.forEach(pisos => {
              let trTabla=document.createElement("tr");
              let tdTabla1=document.createElement("td");
              let tdTabla2=document.createElement("td");
              let tdTabla3=document.createElement("td");
              let tdTabla4=document.createElement("td");
              let tdTabla5=document.createElement("td");
              let tdTabla6=document.createElement("td");
             
              tdTabla1.append(contador);
              tdTabla2.append(pisos["pisoCalle"]);
              tdTabla3.append(pisos["pisoNumero"]);
              tdTabla4.append(pisos["pisoEscalera"]);
              tdTabla5.append(pisos["pisoPlanta"]);
              tdTabla6.append(pisos["pisoPuerta"]);
            
              trTabla.append(tdTabla1);
              trTabla.append(tdTabla2);
              trTabla.append(tdTabla3);
              trTabla.append(tdTabla4);
              trTabla.append(tdTabla5);
              trTabla.append(tdTabla6);         
  
              tbody.append(trTabla);
              contador++;
            });

            tabla.append(tbody);
          divAnadir.append(tabla);
            
          }
          
          setTimeout(function() {
            if(data.pisos.length== 0 && data.casas.length==0){
              let texto=document.createElement("h1");
              texto.append("El Usuario no tiene comprada ninguna vivienda");
  
              divAnadir.append(texto);
            }
          }, 300);
          

        })

        break;
      case "Familia": 
      let datosF=new FormData();
        datosF.append("usuario",opcionUsuario)
        fetch("./encargado/familia.php", {
          method: "POST",
          body: datosF,
        })
        .then(response => response.json()) 
        .then(data => {
          //Una vez tengo todos los datos muestro una tabla con las familias del usuario
         console.log(data);
         let divAnadir=document.getElementById("funcionesUsuarioEncargado");
         divAnadir.innerHTML="";
         let h2=document.createElement("h2");
         h2.append("Familia");
         divAnadir.append(h2);
         let tabla=document.createElement("table");
         tabla.setAttribute("class","table");

         let thead=document.createElement("thead");
         thead.setAttribute("thead","thead-dark"); 
         
         let tr=document.createElement("tr");

         let th1=document.createElement("th");
         th1.setAttribute("scope","col");
         th1.append("#");

         let th2=document.createElement("th");
         th2.setAttribute("scope","col");
         th2.append("Dni");

         let th3=document.createElement("th");
         th3.setAttribute("scope","col");
         th3.append("Nombre");

         let th4=document.createElement("th");
         th4.setAttribute("scope","col");
         th4.append("Apellidos");

         tr.append(th1);
         tr.append(th2);
         tr.append(th3);
         tr.append(th4);
                 
         thead.append(tr);

         tabla.append(thead);
         
         let tbody=document.createElement("tbody");
         let contador=1;

         data.forEach(familia => {
           let trTabla=document.createElement("tr");
           let tdTabla1=document.createElement("td");
           let tdTabla2=document.createElement("td");
           let tdTabla3=document.createElement("td");
           let tdTabla4=document.createElement("td");
         
           tdTabla1.append(contador);
           tdTabla2.append(familia["dni"]);
           tdTabla3.append(familia["nombre_persona"]);
           tdTabla4.append(familia["apellidos_persona"]);
          
         
           trTabla.append(tdTabla1);
           trTabla.append(tdTabla2);
           trTabla.append(tdTabla3);
           trTabla.append(tdTabla4);
            

           tbody.append(trTabla);
           contador++;
         });

         tabla.append(tbody);
       divAnadir.append(tabla);
         
      })

        break; 
  
      default:
        console.log("Error");
    }
  
}

//Busqueda usuarios

//Modificar titularidad

function modificarTitularidad(){
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("divTitularidadEncargado").style.display="";

  fetch("./encargado/titularidad.php", {
    method: "GET",
  })
  .then(response => response.json()) 
  .then(data => {

    
    console.log(data);
    let arrayPropietarios1=[];
    let arrayPropietarios2=[];
    let divAnadir=document.getElementById("divTitularidad");
    divAnadir.innerHTML="";
    let h1=document.createElement("h1");
    h1.append("Titularidades");
    divAnadir.append(h1);
    let tabla1=document.createElement("table");
    tabla1.setAttribute("class","table");

    let thead1=document.createElement("thead");
    thead1.setAttribute("thead","thead-dark"); 
    
    let tr1=document.createElement("tr");

    let th1=document.createElement("th");
    th1.setAttribute("scope","col");
    th1.append("#");

    let th2=document.createElement("th");
    th2.setAttribute("scope","col");
    th2.append("Calle");

    let th3=document.createElement("th");
    th3.setAttribute("scope","col");
    th3.append("Numero");

    let th4=document.createElement("th");
    th4.setAttribute("scope","col");
    th4.append("Tipo");

    let th5=document.createElement("th");
    th5.setAttribute("scope","col");
    th5.append("Escalera");

    let th6=document.createElement("th");
    th6.setAttribute("scope","col");
    th6.append("Planta");

    let th7=document.createElement("th");
    th7.setAttribute("scope","col");
    th7.append("Puerta");

    let th8=document.createElement("th");
    th8.setAttribute("scope","col");
    th8.append("Propietario");

    let th9=document.createElement("th");
    th9.setAttribute("scope","col");
    th9.append("Editar");

    tr1.append(th1);
    tr1.append(th2);
    tr1.append(th3);
    tr1.append(th4);
    tr1.append(th5);
    tr1.append(th6);
    tr1.append(th7);
    tr1.append(th8);
    tr1.append(th9);
    
    thead1.append(tr1);

    tabla1.append(thead1);
    
    
    let tbody=document.createElement("tbody");
    let contador1=1;

    data.pisos.forEach(pisos => {
      let trTabla=document.createElement("tr");
      let tdTabla1=document.createElement("td");
      let tdTabla2=document.createElement("td");
      let tdTabla3=document.createElement("td");
      let tdTabla4=document.createElement("td");
      let tdTabla5=document.createElement("td");
      let tdTabla6=document.createElement("td");
      let tdTabla7=document.createElement("td");
      let tdTabla8=document.createElement("td");
      let tdTabla9=document.createElement("td");

      tdTabla1.append(contador1);
      tdTabla2.append(pisos["calle"]);
      tdTabla3.append(pisos["numero"]);
      tdTabla4.append(pisos["tipo_vivienda"]);
      tdTabla5.append(pisos["escalera"]);
      tdTabla6.append(pisos["planta"]);
      tdTabla7.append(pisos["puerta"]);

      let comboPropietarios=document.createElement("select");
    
      comboPropietarios.setAttribute("class", "form-select form-select-lg mb-3");
      comboPropietarios.setAttribute("aria-label", ".form-select-lg example");
      
      comboPropietarios.setAttribute("name", "Propietarios");
      rellenarComboPropietarios();
      tdTabla8.append(comboPropietarios);
      arrayPropietarios1.push(pisos["dni_p"])
      
      let btnEditar=document.createElement("button");
      btnEditar.setAttribute("type", "submit");
      btnEditar.setAttribute("value", "Modificar");
      btnEditar.setAttribute("name","editarViviendaPropietario");
      btnEditar.setAttribute("class","btn btn-primary");

      tdTabla9.append(btnEditar);

      trTabla.append(tdTabla1);
      trTabla.append(tdTabla2);
      trTabla.append(tdTabla3);
      trTabla.append(tdTabla4);
      trTabla.append(tdTabla5);
      trTabla.append(tdTabla6);
      trTabla.append(tdTabla7);
      trTabla.append(tdTabla8);
      trTabla.append(tdTabla9);
       
      tbody.append(trTabla);
      contador1++;
    });

    data.casas.forEach(casas => {
      let trTabla=document.createElement("tr");
      let tdTabla1=document.createElement("td");
      let tdTabla2=document.createElement("td");
      let tdTabla3=document.createElement("td");
      let tdTabla4=document.createElement("td");
      let tdTabla5=document.createElement("td");
      let tdTabla6=document.createElement("td");
      let tdTabla7=document.createElement("td");
      let tdTabla8=document.createElement("td");
      let tdTabla9=document.createElement("td");
      tdTabla1.append(contador1);
      tdTabla2.append(casas["calle"]);
      tdTabla3.append(casas["numero"]);
      tdTabla4.append(casas["tipo_vivienda"]);
      tdTabla5.append("X");
      tdTabla6.append("X");
      tdTabla7.append("X");

      let btnEditar=document.createElement("button");
    btnEditar.setAttribute("type", "submit");
    btnEditar.setAttribute("value", "Modificar");
    btnEditar.setAttribute("name","editarViviendaPropietario");
    btnEditar.setAttribute("class","btn btn-primary");

    tdTabla9.append(btnEditar);

      let comboPropietarios=document.createElement("select");
    
      comboPropietarios.setAttribute("class", "form-select form-select-lg mb-3");
      comboPropietarios.setAttribute("aria-label", ".form-select-lg example");
      
      comboPropietarios.setAttribute("name", "Propietarioss");
      rellenarComboPropietarios();
      tdTabla8.append(comboPropietarios);
      arrayPropietarios2.push(casas["dni_cp"])
      
      trTabla.append(tdTabla1);
      trTabla.append(tdTabla2);
      trTabla.append(tdTabla3);
      trTabla.append(tdTabla4);
      trTabla.append(tdTabla5);
      trTabla.append(tdTabla6);
      trTabla.append(tdTabla7);
      trTabla.append(tdTabla8);
      trTabla.append(tdTabla9);
      tbody.append(trTabla);
      contador1++;
    });

    tabla1.append(tbody);
  divAnadir.append(tabla1);

  //Seleccionar el value de cada combo Propietario
  setTimeout(function() {
    let contadorPropietarios=0;
  let comboPropietarios=document.getElementsByName("Propietarios");
  comboPropietarios.forEach(element => {
    element.value=arrayPropietarios1[contadorPropietarios];
  
    contadorPropietarios++;
  });

  }, 500);

  setTimeout(function() {
    let contadorPropietarios=0;
  let comboPropietarios=document.getElementsByName("Propietarioss");
  comboPropietarios.forEach(element => {
    element.value=arrayPropietarios2[contadorPropietarios];
  
    contadorPropietarios++;
  });

  }, 500);

  //Añado evento a cada uno de los botones
  var botones = document.getElementsByName("editarViviendaPropietario");
  for (var i = 0; i < botones.length; i++) {
   
    botones[i].addEventListener("click", editarPropietario);
  }

  });

}

function editarPropietario(event) {
  document.getElementById("diseñoPrincipal").style.display="none";
  let dni=event.target.parentNode.previousSibling.firstChild.value;

  let calle=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let numero=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let escalera=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let planta=event.target.parentNode.previousSibling.previousSibling.previousSibling.firstChild.textContent;
  let puerta=event.target.parentNode.previousSibling.previousSibling.firstChild.textContent;
  let tipo=event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.textContent;

  let datos=new FormData();
  datos.append("dni",dni);
  datos.append("calle",calle);
  datos.append("numero",numero);
  datos.append("escalera",escalera);
  datos.append("puerta",puerta);
  datos.append("planta",planta);
  datos.append("tipo",tipo);

      fetch("./encargado/cambiarPropietario.php", {
        method: "POST", //Le envio los datos a update por esa razon es POST
        body: datos,
      })
        .then((res) => res.json())//Obtengo respuesta
        .then((datos) => {//Esto me lo da update.php mediante json_encode
          
          if (datos === "error") {
            
            console.log("Se ha producido un erro actualizando");
          } else {
            console.log("actualizacion correcta");
            window.location.href = "index.html";
          }
        });

}

function rellenarComboPropietarios() {
  document.getElementById("diseñoPrincipal").style.display="none";
  fetch("./encargado/listadoPropietarios.php", {
    method: "GET",
  })
  .then(response => response.json()) 
  .then(data => {
    
    let comboPropietarios1=document.getElementsByName("Propietarios");

    let comboPropietarios2=document.getElementsByName("Propietarioss");
    
    comboPropietarios1.forEach(combos => {
      if(combos.children.length==0)
      {
        data.forEach(option => {
          let option1=document.createElement("option");
          option1.value=option["dni"];    
            option1.text=option["dni"];
            combos.append(option1);
        });
      }
    });

    comboPropietarios2.forEach(combos => {
      if(combos.children.length==0)
      {
        data.forEach(option => {
          let option1=document.createElement("option");
          option1.value=option["dni"];    
            option1.text=option["dni"];
            combos.append(option1);
        });
      }
    });
  });

}
//Modificar titularidad

//Familias Admin

function familiasAdmin() {
  ocultar();
  document.getElementById("diseñoPrincipal").style.display="none";
  document.getElementById("formDatosAdminFamilias").style.display="";
  document.getElementById("tablaMiembrosFamiliasAdmin").style.display="none";
  
  fetch("./admin/listadoFamilias.php", {
    method: "GET",
  })
  .then(response => response.json()) 
  .then(data => {

    let combo=document.getElementById("comboFamiliaAdmin");
    
      if(combo.children.length==1)
      {
        data.forEach(option => {
          let option1=document.createElement("option");
          option1.value=option["id"];    
            option1.text="Familia "+option["id"]+" Numero Miembros ("+option["num_miembros"]+")";
            combo.append(option1);
        });
      }

      combo.addEventListener("change",mostrarMiembrosFamilia);

  });
}

function mostrarMiembrosFamilia(event) {
  document.getElementById("diseñoPrincipal").style.display="none";
  if(event.target.value!="Seleccione una Familia")
  {
    let datosF=new FormData();
    datosF.append("familia",event.target.value)
    fetch("./admin/miembrosFamilia.php", {
      method: "POST",
      body: datosF,
    })
    .then(response => response.json()) 
    .then(data => {
      document.getElementById("tablaMiembrosFamiliasAdmin").style.display="";
     
         //Una vez obtenidos los datos monto la tabla y la muestro
  let cuerpoTabla=document.getElementById("cuerpoFamiliasAdmin");
  cuerpoTabla.innerHTML="";
  let contador=0;
  data.forEach(miembros => {
    contador++;
    let trTabla=document.createElement("tr");
    let tdTabla1=document.createElement("td");
    let tdTabla2=document.createElement("td");
    let tdTabla3=document.createElement("td");
    let tdTabla4=document.createElement("td");
    let tdTabla5=document.createElement("td");
    let inputNombre=document.createElement("input");
    inputNombre.setAttribute("value", miembros["nombre_persona"]);
    let inputApellidos=document.createElement("input");
    inputApellidos.setAttribute("value", miembros["apellidos_persona"]);
    let btnEditar=document.createElement("button");
    btnEditar.setAttribute("type", "submit");
    btnEditar.setAttribute("value", "Modificar");
    btnEditar.setAttribute("name","editarPersona");
    btnEditar.setAttribute("class","btn btn-primary");
    tdTabla1.setAttribute("scope","row"); 
    tdTabla1.append(contador);
    tdTabla2.append(miembros["dni"]);
    tdTabla3.append(inputNombre);
    tdTabla4.append(inputApellidos);
    tdTabla5.append(btnEditar);
    
    trTabla.append(tdTabla1);
    trTabla.append(tdTabla2);
    trTabla.append(tdTabla3);
    trTabla.append(tdTabla4);
    trTabla.append(tdTabla5);
    cuerpoTabla.append(trTabla);

  });

  //Añado evento a cada uno de los botones
  var botones = document.getElementsByName("editarPersona");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", editarMiembrosFamiliaAdmin);
}

    });
  }else{
    document.getElementById("tablaMiembrosFamiliasAdmin").style.display="none";
  }
}

function editarMiembrosFamiliaAdmin(event) {
  document.getElementById("diseñoPrincipal").style.display="none";
  let apellidos=event.target.parentNode.previousSibling.firstChild.value;
  let nombre=event.target.parentNode.previousSibling.previousSibling.firstChild.value;
  let dni=event.target.parentNode.previousSibling.previousSibling.previousSibling.firstChild.textContent;

  let datosF=new FormData();
  datosF.append("apellidos",apellidos)
  datosF.append("nombre",nombre)
  datosF.append("dni",dni)
  fetch("./admin/modificarMiembrosFamilia.php", {
    method: "POST",
    body: datosF,
  })
  .then(response => response.json()) 
  .then(data => {
      console.log(data);

  });
}
//Familias Admin

//Comprar Casa

function comprarCasa(){
   let selectCasa=document.getElementById("selectCasasComprar");

   if(selectCasa.value!="null")
   {
    var cadena = selectCasa.value;
			var partes = cadena.split("-");

			let calle=partes[0];
			let numero=partes[1];

      let datos=new FormData();
			datos.append("calle",calle);
      datos.append("numero",numero);
      datos.append("dni",localStorage.getItem("usuario"));
      fetch("./usuario/comprarCasa.php", {
				method: "POST", //Le envio los datos a update por esa razon es POST
				body: datos,
			})
				.then((res) => res.json())//Obtengo respuesta
				.then((datos) => {//Esto me lo da registrar.php mediante json_encode
          console.log(datos);
          window.location.href = "index.html";
        });
   }else{
    alert("Seleccione la Casa que desee comprar");
   }
   
}

//Comprar Casa

//Comprar Piso
function comprarPiso() {
  let selectPiso=document.getElementById("selectPisosComprar");

  
  if(selectPiso.value!="null")
  {
      var cadena = selectPiso.value;
			var partes = cadena.split("-");

			let calle=partes[0];
			let numero=partes[1];
			let escalera=partes[2];
			let planta=partes[3];
			let puerta=partes[4];

      let datos=new FormData();

      console.log(calle);
      console.log(numero);
      console.log(escalera);
      console.log(planta);
      console.log(puerta);
      console.log(localStorage.getItem("usuario"));
			datos.append("calle",calle);
      datos.append("numero",numero);
      datos.append("escalera",escalera);
      datos.append("planta",planta);
      datos.append("puerta",puerta);
      datos.append("dni",localStorage.getItem("usuario"));

      fetch("./usuario/comprarPiso.php", {
				method: "POST", //Le envio los datos a update por esa razon es POST
				body: datos,
			})
				.then((res) => res.json())//Obtengo respuesta
				.then((datos) => {//Esto me lo da registrar.php mediante json_encode
          console.log(datos);
          window.location.href = "index.html";
        });
   
  }else{
    alert("Seleccione el Piso que desee comprar");
   }
}

//Comprar Piso