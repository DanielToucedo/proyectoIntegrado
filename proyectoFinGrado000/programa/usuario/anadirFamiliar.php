<?php

$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";


if (2 === 3){
  echo json_encode('error');

} else {

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }
  $usuario=$_POST["usuario"];
  $dniNuevo=$_POST["dniNuevo"];
  $nombreNuevo=$_POST["nombreNuevo"];
  $apellidoNuevo=$_POST["apellidoNuevo"];
  $generoNuevo=$_POST["generoNuevo"];
 
 
  //Obtener calle y numero de donde vive el cabeza de familia
  $consultaCalleNumero = "SELECT persona.calle,persona.numero from persona where persona.dni='$usuario'";
  $resultadoCalleNumero = mysqli_query($conn, $consultaCalleNumero);

    
    $filaCalleNumero = mysqli_fetch_assoc($resultadoCalleNumero);
    
    $CalleCabeza = $filaCalleNumero["calle"];
    $NumeroCabeza = $filaCalleNumero["numero"];

     // Liberar el resultado de la consulta
     mysqli_free_result($resultadoCalleNumero);

   //Obtener calle y numero de donde vive el cabeza de familia


  //Añadir Persona
  $sqlTablaPersona = "INSERT INTO persona (dni, contrasena, nombre_persona, apellidos_persona, genero, dni_c, calle, numero, tipo) VALUES ('$dniNuevo', null, '$nombreNuevo', '$apellidoNuevo', '$generoNuevo', '$usuario', '$CalleCabeza', '$NumeroCabeza', 'U')";

 
  if (mysqli_query($conn, $sqlTablaPersona)) {
    echo json_encode ('Registro Insertado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sqlTablaPersona . '<br>' . mysqli_error($conn));
  }

  //Obtener el id de la familia a la que pertenece el usuario
  $consultaIdFamilia = " SELECT familia.id FROM familia WHERE familia.cabeza_familia='$usuario'";
  $resultadoIdFamilia = mysqli_query($conn, $consultaIdFamilia);

    // Obtener el valor del último ID de familia
    $filaId = mysqli_fetch_assoc($resultadoIdFamilia);
    
    $IdFamilia = $filaId["id"];

     // Liberar el resultado de la consulta
     mysqli_free_result($resultadoIdFamilia);

  //Obtener el id de la familia a la que pertenece el usuario
 
    $sqlIntroducirFamilia="INSERT INTO persona_familia (dniPersona, id_familia)
    VALUES ('$dniNuevo', '$IdFamilia')";

    if (mysqli_query($conn, $sqlIntroducirFamilia)) {
        echo json_encode ('Registro Insertado correctamente en la BD');
    } else {
        echo json_encode ('Error: ' . $sqlIntroducirFamilia . '<br>' . mysqli_error($conn));
    }



    //Una vez añadido en la tabla persona_familia y persona tengo que ver si lo tengo que añadir en persona solo  o en habitapiso y persona
    $consultaTipoVivienda = "SELECT vivienda.tipo_vivienda from vivienda where vivienda.numero='$NumeroCabeza' and vivienda.calle='$CalleCabeza'";
    $resultadoTipoVivienda= mysqli_query($conn, $consultaTipoVivienda);
  
      // Obtener el valor del último ID de familia
      $filaTipo = mysqli_fetch_assoc($resultadoTipoVivienda);
      
      $tipoVivienda = $filaTipo["tipo_vivienda"];
  
       // Liberar el resultado de la consulta
       mysqli_free_result($resultadoTipoVivienda);
    
    if($tipoVivienda=='B')
    {

        //Obtener todos los datos del piso del que es propietario el cabeza de familia para poder agregar al nuevo miembro a habitapiso
        $consultaDatosPiso = "SELECT piso.calle,piso.numero,piso.escalera,piso.planta,piso.puerta from piso where piso.dni_p='$usuario'";
        $resultadoDatosPiso= mysqli_query($conn, $consultaDatosPiso);
      
          
          $filaDatosPiso = mysqli_fetch_assoc($resultadoDatosPiso);
          
          $callePiso = $filaDatosPiso["calle"];
          $numeroPiso = $filaDatosPiso["numero"];
          $escaleraPiso = $filaDatosPiso["escalera"];
          $plantaPiso = $filaDatosPiso["planta"];
          $puertaPiso = $filaDatosPiso["puerta"];

           // Liberar el resultado de la consulta
           mysqli_free_result($resultadoDatosPiso);
        

        //Obtener todos los datos del piso del que es propietario el cabeza de familia para poder agregar al nuevo miembro a habitapiso

        $sqlHabitaPiso="INSERT habitapiso SET dni = '$dniNuevo', calle= '$callePiso', numero='$numeroPiso', escalera='$escaleraPiso', planta='$plantaPiso', puerta='$puertaPiso'";
        if (mysqli_query($conn, $sqlHabitaPiso)) {
            echo json_encode ('Registro Insertado correctamente en la BD');
          } else {
            echo json_encode ('Error: ' . $sqlHabitaPiso . '<br>' . mysqli_error($conn));
          }
    }
  $conn->close();
  }
?>