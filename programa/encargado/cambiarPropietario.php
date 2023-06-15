
<?php

$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "catastro";


if (2 === 3){
  echo json_encode('error');

} else {
    $sqlBase="";
  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }
  
 
$dni=$_POST["dni"];
$calle=$_POST["calle"];
$numero=$_POST["numero"];
$escalera=$_POST["escalera"];
$puerta=$_POST["puerta"];
$planta=$_POST["planta"];

if ($_POST["tipo"]=="B")
{
    $sqlBase="UPDATE piso
    SET piso.dni_p = '$dni'
    WHERE numero='$numero' and calle='$calle' and escalera='$escalera' and planta='$planta' and puerta='$puerta'";
}else{
    $sqlBase="UPDATE casaparticular
    SET casaparticular.dni_cp = '$dni'
    WHERE numero='$numero' and calle='$calle'";
}

 
  if (mysqli_query($conn, $sqlBase)) {
    echo json_encode ('Registro Actualizado correctamente en la BD');
    
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }


  $conn->close();
  }
