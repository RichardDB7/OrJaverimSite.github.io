<?php

  require 'database.php';

  $message = '';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $sql = "INSERT INTO users (email, password) VALUES (:email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = '<br><br><h3>Tu Usario Ha Sido Creado Con Éxito<h3>';
      echo '<script>
      setTimeout(function() {
        window.location.href = "http://localhost/Or%20Javerim%20Site/";
      }, 2000);
      </script>';

    } else {
      $message = 'Lo siento, tu cuenta no ha sido creada...';
    }
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SignUp</title>
    <link rel="stylesheet" href="estilos.css">
    
  </head>
  <body>

    <?php require 'partials/header.php' ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>


    <form action="signup.php" id="formTehilim" method="POST">
      <h1>Crea Tu Usuario</h1>
      <label for="">Nombre: </label>
      <input name="email" type="text" placeholder="&#129333; Escriba su Usuario:"id="usuario" required>
      <label for="">Contraseña:</label> 
      <input name="password" placeholder="&#128272;Escriba su Clave" id="pass" required>
      <input name="confirm_password" placeholder="&#128272;Confirme Su Clave" id="pass" required>
      <input type="submit" class="button" value="Enviar">

    </form>

  </body>
</html>