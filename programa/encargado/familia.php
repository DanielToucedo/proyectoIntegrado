
<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";


try {
    
   $usuario=$_POST["usuario"];
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT persona.nombre_persona,persona.dni,persona.apellidos_persona from persona where persona.dni in (SELECT persona_familia.dniPersona from persona_familia where persona_familia.id_familia IN (SELECT persona_familia.id_familia FROM persona_familia where persona_familia.dniPersona='$usuario'))");
	
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>