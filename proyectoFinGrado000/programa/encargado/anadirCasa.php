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

  $sql = "INSERT INTO vivienda (calle, numero, tipo_vivienda, codigo_postal, metros, od_vivienda, nombre_zona) VALUES ('$calle', '$numero', 'C', '$codPostal', '$metros', 'Casa', '$nombreZona')";
  $sql2="INSERT INTO casaparticular (calle,numero,metros_c, od_Casa, dni_cp) VALUES ('$calle', '$numero', '$metros', 'Casa', Null)";
 
  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  if (mysqli_query($conn, $sql2)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>