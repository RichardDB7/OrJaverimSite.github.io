
<?php

$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "orjaverim";

// Crear conexión
$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {die("Conexión fallida: " . mysqli_connect_error());}

if (isset($_POST)) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql_query = "INSERT INTO form (name, email, subject, message) VALUES ('$name','$email','$subject','$message')";

    if (mysqli_query($conn, $sql_query)) {
        echo "Gracias ".$name.", tu mensaje ha sido enviado ";        
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
