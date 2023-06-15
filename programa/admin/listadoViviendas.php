<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";
$zona=$_POST["zona"];

try {


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT calle,numero,tipo_vivienda,codigo_postal,metros,od_vivienda,nombre_zona FROM vivienda where nombre_zona =\"$zona\"");

  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

	


$conn = null;
?>
