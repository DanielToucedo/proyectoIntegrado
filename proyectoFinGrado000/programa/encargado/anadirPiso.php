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
  
  $metros=$_POST["metros"];
  $codPostal=$_POST["codigoPostal"];
  $numero=$_POST["numero"];
  $calle=$_POST["calle"];
  $nombreZona=$_POST["zonaUrbana"];
  $PlantaPiso=$_POST["PlantaPiso"];
  $PuertaPiso=$_POST["PuertaPiso"];
  $EscaleraPiso=$_POST["EscaleraPiso"];
  $mBloque=$metros*8;

  $sql = "INSERT INTO vivienda (calle, numero, tipo_vivienda, codigo_postal, metros, od_vivienda, nombre_zona) VALUES ('$calle', '$numero', 'B', '$codPostal', '$metros', 'Piso', '$nombreZona')";
  //Solo sería efectiva si no estuviese ya en bloque 
  $sqlBloque="INSERT INTO bloquecasas (calle, numero, metros_b, od_bloque) VALUES ('$calle', '$numero', '$mBloque', null)";
  $sqlPiso="INSERT INTO piso (calle, numero, escalera, planta, puerta, metros_p, od_piso, dni_p) VALUES ('$calle', $numero, $EscaleraPiso, $PlantaPiso, $PuertaPiso, $metros, 'Piso', NULL)";
  
 
  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  if (mysqli_query($conn, $sqlBloque)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  if (mysqli_query($conn, $sqlPiso)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>