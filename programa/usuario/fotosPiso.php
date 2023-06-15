
<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";

$calle=$_POST["calle"];
$numero=$_POST["numero"];
$escalera=$_POST["escalera"];
$planta=$_POST["planta"];
$puerta=$_POST["puerta"];

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT imagen,numero,calle,escalera,planta,puerta FROM `fotospiso` WHERE calle=\"$calle\" and numero=\"$numero\" and escalera=\"$escalera\" and planta=\"$planta\" and puerta=\"$puerta\" ");
  /*
  $stmt->execute();
  $row = $stmt->fetch(PDO::FETCH_ASSOC);

  // Codificar la imagen como Base64
  $imagen_codificada = base64_encode($row['imagen']);
  echo json_encode(array('imagen' => $imagen_codificada));
  */
  $stmt->execute();
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $imagenes = array();
  foreach ($results as $row) {
    $imagen_codificada = base64_encode($row['imagen']);
    $imagen = array('numero' => $row['numero'], 'imagen' => $imagen_codificada);
    array_push($imagenes, $imagen);
  }

  echo json_encode(array('imagenes' => $imagenes));
} catch(PDOException $e) {
  echo "Error: " .$sqlBase." ". $e->getMessage();
  echo $sqlBase;
}


$conn = null;
?>