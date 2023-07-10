
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
echo error_reporting(E_ALL);
echo ini_set('display_errors', 1);
echo var_dump(error_get_last());


$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "orjaverim";

// Crear conexión
$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {die("Conexión fallida: " . mysqli_connect_error());}
// Asegúrate de tener la conexión a la base de datos previamente establecida
// ...

if (isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Realiza la inserción de los datos en la tabla
    $sql_query = "INSERT INTO form (name, email, subject, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql_query);
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    
    if ($stmt->execute()) {
        echo "Gracias ".$name.", tu mensaje ha sido enviado ";
    } else {
        echo "Error al enviar el mensaje";
    }

    $stmt->close();
} else {
    echo "Error: Datos faltantes";
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpEmail/PHPMailer/src/Exception.php';
require 'phpEmail/PHPMailer/src/PHPMailer.php';
require 'phpEmail/PHPMailer/src/SMTP.php';
try {
    
if(isset($_POST['send'])){
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'Praleck@gmail.com';
    $mail->Password = 'ksklgzfaswvoilhm';
    $mail->Password = 'idgumseyvokotoar';

    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('Praleck@gmail.com');
    $mail->addAddress('ricardodiazbatalla@gmail.com');
    $mail->Subject = "$email ($subject)";
    $mail->Body = $message;
    $mail->send();
    echo "<script>console.log('Éxito en el envío a la casilla gmail');</script>";

    header("Location: ./index.html");
}}
catch (Exception $e) {
    echo "<script>console.log('ERROR'. $e->getMessage());</script>";
    echo error_reporting(E_ALL);
    echo ini_set('display_errors', 1);
    echo var_dump(error_get_last());
    echo 'Error en el envío del correo: ' . $e->getMessage();
}

?>

