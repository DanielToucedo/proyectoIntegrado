
<?php


echo "<pre>";
print_r($_POST);
echo "</pre>";
echo "<pre>";
print_r($_FILES);
echo "</pre>";


//connect to MySQL 
$db = mysqli_connect('localhost', 'root', '') or 
    die ('Unable to connect. Check your connection parameters.');
mysqli_select_db($db,'catastro') or die(mysqli_error($db));

//en esta ruta especificamos el directorio para las imágenes
$dir="images";

//asegurarse que la transferencia del archivo cargado se ha efectuado correctamente
if ($_FILES['image']['error'] != UPLOAD_ERR_OK)
    {
        switch ($_FILES['image']['error']) {
        case UPLOAD_ERR_INI_SIZE:
            die('El tamaño del archivo excede el permitido por la directiva  upload_max_filesize establecida en php.ini. ' );
            break;
        case UPLOAD_ERR_FORM_SIZE:
            die('El tamaño  del archivo cargado excede el permitido por la directiva  MAX_FILE_SIZE establecida en  el formulario HTML.');
            break;
        case UPLOAD_ERR_PARTIAL:
            die('El archivo se ha cargado parcialmente ');
            break;
        case UPLOAD_ERR_NO_FILE:
            die('No ha cargado ningún archivo');
            break;
        case UPLOAD_ERR_NO_TMP_DIR:
            die('No se encuentra el directorio temporal del servidor ');
            break;
        case UPLOAD_ERR_CANT_WRITE:
            die('El servidor ha fallado al intentar escribir el archivo en el disco');
            break;
        case UPLOAD_ERR_EXTENSION:
            die('Subida detenida por la extensión');
            break;
        }
    }

     //obtener información de la imagen que se acaba de cargar
    $num_ident = 1;
    $foto_type=  $_FILES['image']['type'];
    $foto_temporal= $_FILES['image']['tmp_name'];
    $tamano= $_FILES['image']['size'];
    $nombre= $_FILES['image']['name'];
    /////////////////////////////
    if ($foto_type=="image/x-png" OR $foto_type=="image/png"){
          $formato="image/png"; }
	if ($foto_type=="image/pjpeg" OR $foto_type=="image/jpeg"){
	 $formato="image/jpeg";
	 }
	if ($foto_type=="image/gif" OR $foto_type=="image/gif"){
	 $formato="image/gif";
	 }


      //preparar el fichero subido para meterlo en la tabla
     $f1= fopen($foto_temporal,"rb");
     $foto_reconvertida = fread($f1, $tamano);
     $foto_reconvertida=addslashes($foto_reconvertida);
    ////insert
     
    ////insert
    
    if(isset($_POST["plantaPiso"]))
    {

    
    //datos obtenidos del piso para introducirle una foto a la tabla fotopiso
     $calle=$_POST["callePiso"];
     $numero=$_POST["numeroPiso"];
     $escalera=$_POST["escaleraPiso"];
     $planta=$_POST["plantaPiso"];
     $puerta=$_POST["puertaPiso"];
    //datos obtenidos del piso para introducirle una foto a la tabla fotopiso
    
    
    $query = "INSERT INTO fotospiso
        (calle,numero,escalera,planta,puerta,imagen,nombre, tamano,formato)
    VALUES
        ('$calle',$numero,'$escalera','$planta','$puerta','$foto_reconvertida','$nombre','$tamano','$formato')"; 
    }else{
        $calle=$_POST["calleCasa"];
        $numero=$_POST["numeroCasa"];

        $query = "INSERT INTO fotoscasa
        (calle,numero,imagen,nombre, tamano,formato)
    VALUES
        ('$calle',$numero,'$foto_reconvertida','$nombre','$tamano','$formato')"; 

    }
    ////insert    
      /*
    $query = "INSERT INTO fotos
        (num_ident,imagen,nombre, tamano,formato)
    VALUES
        ('$num_ident','$foto_reconvertida','$nombre','$tamano','$formato')"; 
      */

     if($result = mysqli_query( $db,$query) or die (mysqli_error($db)))
    {
        echo "Imagen introducida correctamente";
        echo "<br>";
        header("Location:".$_SERVER['HTTP_REFERER']); 



    }else{
        echo "Error al introducir las fotos";
        echo "<br>";
        header("Location:".$_SERVER['HTTP_REFERER']); 
    }
    
 ?>

