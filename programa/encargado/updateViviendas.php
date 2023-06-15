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
  
  $metros=$_POST["metros"];
  $codPostal=$_POST["codigoPostal"];
  $numero=$_POST["numero"];
  $tipo=$_POST["tipo"];
  $calle=$_POST["calle"];
  $nombreZona=$_POST["nombreZona"];
  $metrosBloque=$metros*6;
  if($tipo=="C")
  {
  $sql = "UPDATE vivienda JOIN casaparticular ON casaparticular.calle=vivienda.calle and casaparticular.numero=vivienda.numero left JOIN persona ON persona.calle=vivienda.calle and persona.numero=vivienda.numero SET vivienda.codigo_postal =\"$codPostal\", vivienda.metros=\"$metros\", vivienda.nombre_zona=\"$nombreZona\", casaparticular.metros_c=\"$metros\" WHERE vivienda.calle = \"$calle\" and vivienda.numero=\"$numero\" and vivienda.tipo_vivienda=\"C\"";
  }else{
    $sql = "UPDATE piso JOIN bloquecasas ON bloquecasas.calle=piso.calle and bloquecasas.numero=piso.numero JOIN vivienda ON vivienda.calle=bloquecasas.calle and vivienda.numero=bloquecasas.numero SET piso.metros_p=\"$metros\", vivienda.codigo_postal =\"$codPostal\", vivienda.metros=\"$metros\", vivienda.nombre_zona=\"$nombreZona\", bloquecasas.metros_b=\"$metrosBloque\" WHERE vivienda.calle = \"$calle\" and vivienda.numero=\"$numero\" and vivienda.tipo_vivienda=\"B\"";
  }
  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>
