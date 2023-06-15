<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

$usuario=$_POST["usuario"];

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM Persona inner JOIN Persona_Familia ON persona.dni = persona_familia.dniPersona 
	inner JOIN Familia ON persona_familia.id_familia = familia.id
	WHERE familia.cabeza_familia = \"$usuario\"");
	
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>
