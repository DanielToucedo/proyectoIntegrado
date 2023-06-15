
<?php
$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";

$calle=$_POST["calle"];
$numero=$_POST["numero"];

try {

  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT imagen,numero,calle FROM `fotoscasa` WHERE calle=\"$calle\" and numero=\"$numero\"");
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