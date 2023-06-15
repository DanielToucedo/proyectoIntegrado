<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";
	
try {


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT calle,numero,escalera,planta,puerta FROM piso where dni_p IS NULL");

  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

	


$conn = null;
?>