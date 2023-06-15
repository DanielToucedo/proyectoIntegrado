<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

$calle=$_POST["calle"];
$numero=$_POST["numero"];
$escalera=$_POST["escalera"];
$planta=$_POST["planta"];
$puerta=$_POST["puerta"];

$dni=$_POST["dni"];


if (2 === 3){
  echo json_encode('error');

} else {

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }
  $sql ="UPDATE piso SET dni_p='$dni' where piso.calle='$calle' and piso.numero='$numero' and piso.escalera='$escalera' and piso.planta='$planta' and piso.puerta='$puerta'";
  
  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>