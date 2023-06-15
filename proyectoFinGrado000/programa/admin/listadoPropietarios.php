<?php
$servername = "localhost";
$username = "id20916213_localhost";
$password = "Adminadmin1-";
$basedatos = "id20916213_catastro";
$zona=$_POST["zona"];
$calle=$_POST["calle"];
$numero=$_POST["numero"];
$sqlBase="SELECT persona.dni,vivienda.calle,vivienda.numero,vivienda.numero,vivienda.nombre_zona FROM persona INNER JOIN vivienda ON persona.calle =vivienda.calle and persona.numero=vivienda.numero where persona.contrasena !=' '";
$where="";

if($zona!="null")
{
    $where.=" AND vivienda.nombre_zona = \"$zona\" ";
}

if($calle!="null")
{
    $where.=" AND vivienda.calle = \"$calle\" ";
}
if($numero!="null")
{
    $where.=" AND vivienda.numero =\"$numero\" ";
}
$sqlBase.=$where;

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
