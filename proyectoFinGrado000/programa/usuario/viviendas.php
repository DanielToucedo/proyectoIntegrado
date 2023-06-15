<?php
$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";

$usuario=$_POST["usuario"];

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Define la primera consulta
  $consulta1 = "SELECT (piso.calle)pisoCalle,(piso.numero)pisoNumero,(piso.escalera)pisoEscalera,(piso.planta)pisoPlanta,(piso.puerta)pisoPuerta from persona inner join piso on persona.dni=piso.dni_p where persona.dni =\"$usuario\"";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados1 = $conn->query($consulta1)->fetchAll(PDO::FETCH_ASSOC);

  // Define la segunda consulta
  $consulta2 = "SELECT (casaparticular.calle)casaCalle,(casaparticular.numero)casaNumero from persona inner join casaparticular on persona.dni=casaparticular.dni_cp where persona.dni =\"$usuario\"";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados2 = $conn->query($consulta2)->fetchAll(PDO::FETCH_ASSOC);
	
  echo json_encode(array('pisos' => $resultados1, 'casas' => $resultados2));
  //echo JSON_ENCODE($stmt1->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>
