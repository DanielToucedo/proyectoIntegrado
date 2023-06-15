<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";
	
try {


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT nombre_persona,tipo,dni from persona where persona.tipo='U' ");

  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

	


$conn = null;
?>