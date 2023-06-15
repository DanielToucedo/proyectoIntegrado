<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Define la primera consulta
  $consulta1 = "SELECT DISTINCT vivienda.numero FROM vivienda";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados1 = $conn->query($consulta1)->fetchAll(PDO::FETCH_ASSOC);

  // Define la segunda consulta
  $consulta2 = "SELECT DISTINCT vivienda.calle FROM vivienda";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados2 = $conn->query($consulta2)->fetchAll(PDO::FETCH_ASSOC);
	
  echo json_encode(array('numeros' => $resultados1, 'calles' => $resultados2));
  //echo JSON_ENCODE($stmt1->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>
