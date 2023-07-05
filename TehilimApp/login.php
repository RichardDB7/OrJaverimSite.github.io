<?php

  //session_start();

  if (isset($_SESSION['user_id'])) {
    header('Location: /login-php');
  }
  require 'database.php';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (is_array($results) && count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id'];
      header("Location: http://localhost/Or%20Javerim%20Site/TehilimApp/app.html");
    } else {
      $message = '<br><br>Lo siento, las credenciales son incorrectas';
      echo '<script>
      setTimeout(function() {
        window.location.href = "";
      }, 2000);
      </script>';

      
    }
  }

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <?php require 'partials/header.php' ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

 

      <form action="login.php" id="formlogin" method="POST">
      <h1>Ingresa Tu Usuario</h1>

      <<label for="">Nombre: </label>
      <input name="email" type="text" placeholder="&#129333; Escriba su Usuario:"id="usuario" required>
      <label for="">Contraseña:</label> 
      <input name="password" placeholder="&#128272;Escriba su Clave" id="pass" required>
      
      <input type="submit" class="button" value="Enviar">
    </form>
  </body>
</html>