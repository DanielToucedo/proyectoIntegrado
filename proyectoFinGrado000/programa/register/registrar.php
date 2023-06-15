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
  $contrasena=$_POST["contra"];
  $nombre=$_POST["nombre"];
  $apellidos=$_POST["apellidos"];
  $dni=$_POST["dni"];
  $genero=$_POST["genero"];
  $calle=$_POST["calle"];
  $numero=$_POST["numero"];
  $escalera="";
  $planta="";
  $puerta="";

  if (!isset($_POST["casa"])){
    $escalera=$_POST["escalera"];
    $planta=$_POST["planta"];
    $puerta=$_POST["puerta"];
  }
  //Añadir Persona
  $sqlTablaPersona = "INSERT INTO persona (dni, contrasena, nombre_persona, apellidos_persona, genero, dni_c, calle, numero, tipo) VALUES ('$dni', '$contrasena', '$nombre', '$apellidos', '$genero', '$dni', '$calle', '$numero', 'U')";

  //Crear la familia
  $sqlCrearFamilia="INSERT INTO familia (id, cabeza_familia, num_miembros)
  SELECT (MAX(id) + 1), '$dni', 0 FROM familia";

  /*
  $sqlPiso="INSERT INTO piso (calle, numero, escalera, planta, puerta, metros_p, od_piso, dni_p) VALUES ('$calle', $numero, $EscaleraPiso, $PlantaPiso, $PuertaPiso, $metros, 'Piso', NULL)";
  */
 
  if (mysqli_query($conn, $sqlTablaPersona)) {
    echo json_encode ('Registro Insertado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sqlTablaPersona . '<br>' . mysqli_error($conn));
  }

  
  if (mysqli_query($conn, $sqlCrearFamilia)) {
    echo json_encode ('Registro Insertado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sqlTablaPersona . '<br>' . mysqli_error($conn));
  }

  $consultaUltimoId = "SELECT (MAX(familia.id))id FROM familia";
  $resultado = mysqli_query($conn, $consultaUltimoId);

    // Obtener el valor del último ID de familia
    $fila = mysqli_fetch_assoc($resultado);
    
    $ultimoIdFamilia = $fila["id"];

    // Liberar el resultado de la consulta
    mysqli_free_result($resultado);
    
  

    $sqlIntroducirFamilia="INSERT INTO persona_familia (dniPersona, id_familia)
    VALUES ('$dni', '$ultimoIdFamilia')";

    if (mysqli_query($conn, $sqlIntroducirFamilia)) {
        echo json_encode ('Registro Insertado correctamente en la BD');
    } else {
        echo json_encode ('Error: ' . $sqlIntroducirFamilia . '<br>' . mysqli_error($conn));
    }


  if (isset($_POST["casa"])){

    $sqlComprarCasa="UPDATE casaparticular SET dni_cp = '$dni' where casaparticular.calle='$calle' and casaparticular.numero='$numero'";
    if (mysqli_query($conn, $sqlComprarCasa)) {
        echo json_encode ('Registro Actualizado correctamente en la BD');
      } else {
        echo json_encode ('Error: ' . $sqlComprarCasa . '<br>' . mysqli_error($conn));
      }

  }else{
    
    $sqlHabitaPiso="INSERT habitapiso SET dni = '$dni', calle= '$calle', numero='$numero', escalera='$escalera', planta='$planta', puerta='$puerta'";
    if (mysqli_query($conn, $sqlHabitaPiso)) {
        echo json_encode ('Registro Insertado correctamente en la BD');
      } else {
        echo json_encode ('Error: ' . $sqlHabitaPiso . '<br>' . mysqli_error($conn));
      }

      $sqlComprarPiso="UPDATE piso SET dni_p = '$dni' where calle= '$calle' and numero='$numero' and escalera='$escalera' and planta='$planta' and puerta='$puerta'";
     if (mysqli_query($conn, $sqlComprarPiso)) {
        echo json_encode ('Registro Actualizado correctamente en la BD');
      } else {
        echo json_encode ('Error: ' . $sqlComprarPiso . '<br>' . mysqli_error($conn));
      }

  }


  //Ahora voy a añadir a los miembros de la familia
  $arrayDNI=json_decode($_POST["arrayDNI"]);
  $arrayNombres=json_decode($_POST["arrayNombre"]);
  $arrayApellidos=json_decode($_POST["arrayApellidos"]);
  $arrayContraseña=json_decode($_POST["arrayContraseña"]);
  $arrayGenero=json_decode($_POST["arrayGenero"]);

  
  //Añadir miembros a la tabla persona

  for ($i = 0; $i < count($arrayDNI); $i++) {
    $nombreMiembro=$arrayNombres[$i];
    $apellidosMiembro=$arrayApellidos[$i];
    $dniMiembro=$arrayDNI[$i];
    $generoMiembro=$arrayGenero[$i];
    $sqlTablaPersona = "INSERT INTO persona (dni, contrasena, nombre_persona, apellidos_persona, genero, dni_c, calle, numero, tipo) VALUES ('$dniMiembro', null, '$nombreMiembro', '$apellidosMiembro', '$generoMiembro', '$dni', '$calle', '$numero', 'U')";

    if (mysqli_query($conn, $sqlTablaPersona)) {
        echo json_encode ('Registro Insertado correctamente en la BD');
      } else {
        echo json_encode ('Error: ' . $sqlTablaPersona . '<br>' . mysqli_error($conn));
      }
    
    }

  //Añadir miembros a la tabla persona

  //Añadir en habitaPiso (Si es una casa no es necesario)
  if (!isset($_POST["casa"])){

    for ($i = 0; $i < count($arrayDNI); $i++) {
        
        $dniMiembro=$arrayDNI[$i];
        
        $sqlHabitaPiso="INSERT habitapiso SET dni = '$dniMiembro', calle= '$calle', numero='$numero', escalera='$escalera', planta='$planta', puerta='$puerta'";
        if (mysqli_query($conn, $sqlHabitaPiso)) {
            echo json_encode ('Registro Insertado correctamente en la BD');
          } else {
            echo json_encode ('Error: ' . $sqlHabitaPiso . '<br>' . mysqli_error($conn));
          }
        
        }
   

  }


  for ($i = 0; $i < count($arrayDNI); $i++) {
        
    $dniMiembro=$arrayDNI[$i];
    
    $sqlIntroducirFamilia="INSERT INTO persona_familia (dniPersona, id_familia)
    VALUES ('$dniMiembro', '$ultimoIdFamilia')";

    if (mysqli_query($conn, $sqlIntroducirFamilia)) {
        echo json_encode ('Registro Insertado correctamente en la BD');
    } else {
        echo json_encode ('Error: ' . $sqlIntroducirFamilia . '<br>' . mysqli_error($conn));
    }


}
  


  //Ahora voy a añadir a los miembros de la familia
  
  
/*
  if (mysqli_query($conn, $sqlPiso)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }
*/
  $conn->close();
  }
?>