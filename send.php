<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "orjaverim";

// Crear conexión
$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql_query = "INSERT INTO form (name, email, subject, message)
    VALUES ('$name','$email','$subject','$message')";

    if (mysqli_query($conn, $sql_query)) {
        echo "Datos insertados con éxito";

        // Enviar correo electrónico
        $to = 'ricardodiazbatalla@gmail.com'; // Cambia esto por tu dirección de correo electrónico de Gmail
        $subject = 'Nuevo formulario enviado';
        $email_body = "Nombre: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Asunto: $subject\n";
        $email_body .= "Mensaje: $message\n";

        $headers = "From: ricardodiazbatalla@gmail.com"; // Cambia esto por tu dirección de correo electrónico de Gmail

		 // Configuración de SMTP
		 ini_set("SMTP", "smtp.gmail.com");
		 ini_set("smtp_port", "587");
		 ini_set("sendmail_from", "ricardodiazbatalla@gmail.com");

        // Envía el correo electrónico
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Correo electrónico enviado con éxito";
        } else {
            echo "Error al enviar el correo electrónico";
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
