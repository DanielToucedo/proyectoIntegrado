
<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Define la primera consulta
  $consulta1 = "SELECT vivienda.calle,vivienda.numero,piso.escalera,piso.planta,piso.puerta,vivienda.tipo_vivienda,piso.dni_p FROM vivienda INNER JOIN bloquecasas on vivienda.calle=bloquecasas.calle and vivienda.numero=bloquecasas.numero INNER JOIN piso ON bloquecasas.calle=piso.calle AND bloquecasas.numero=piso.numero";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados1 = $conn->query($consulta1)->fetchAll(PDO::FETCH_ASSOC);

  // Define la segunda consulta
  $consulta2 = "SELECT vivienda.calle,vivienda.numero,vivienda.tipo_vivienda,casaparticular.dni_cp FROM vivienda INNER JOIN casaparticular ON vivienda.calle=casaparticular.calle and vivienda.numero=casaparticular.numero";

  // Ejecuta la primera consulta y almacena los resultados
  $resultados2 = $conn->query($consulta2)->fetchAll(PDO::FETCH_ASSOC);
	
  echo json_encode(array('pisos' => $resultados1, 'casas' => $resultados2));
  //echo JSON_ENCODE($stmt1->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>
