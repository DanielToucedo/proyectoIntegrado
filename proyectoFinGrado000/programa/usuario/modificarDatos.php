<?php
$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";

$dniUsuario=$_POST["dniUsuario"];
$nombreUsuario=$_POST["nombreUsuario"];
$apellidos=$_POST["apellidos"];
$passwordUsuario=$_POST["password"];
$genero=$_POST["genero"];

if (2 === 3){
  echo json_encode('error');

} else {

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }

  $sql = "UPDATE persona SET contrasena='$passwordUsuario', apellidos_persona='$apellidos', genero='$genero', nombre_persona='$nombreUsuario' where dni='$dniUsuario'";


  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>