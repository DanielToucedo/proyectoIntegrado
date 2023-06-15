<?php

$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";


if (2 === 3){
  echo json_encode('error');

} else {

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }
  
  $dni=$_POST["dni"];
  $nombre=$_POST["nombre"];
  $apellidos=$_POST["apellidos"];
 
  $sql = "UPDATE persona SET nombre_persona=\"$nombre\" , apellidos_persona=\"$apellidos\" where persona.dni=\"$dni\"";
 
  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>
