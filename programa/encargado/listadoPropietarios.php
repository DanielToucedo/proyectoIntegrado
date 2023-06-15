<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

$sqlBase="SELECT Persona.dni,vivienda.calle,vivienda.numero,vivienda.numero,vivienda.nombre_zona FROM Persona inner JOIN vivienda ON Persona.calle =Vivienda.calle and Persona.numero=Vivienda.numero where Persona.contrasena !=' '";

try {

  
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare($sqlBase);

  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " .$sqlBase." ". $e->getMessage();
  echo $sqlBase;
}

	


$conn = null;
?>
