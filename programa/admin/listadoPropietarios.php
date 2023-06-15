<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";
$zona=$_POST["zona"];
$calle=$_POST["calle"];
$numero=$_POST["numero"];

$sqlBase="SELECT Persona.dni,vivienda.calle,vivienda.numero,vivienda.numero,vivienda.nombre_zona FROM Persona INNER JOIN vivienda ON Persona.calle =Vivienda.calle and Persona.numero=Vivienda.numero where Persona.contrasena !=' '";
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
