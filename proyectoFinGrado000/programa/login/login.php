<?php
$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
try {


  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM `persona` WHERE contrasena=\"$contrasena\" and dni=\"$usuario\"");

  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

	


$conn = null;
?>