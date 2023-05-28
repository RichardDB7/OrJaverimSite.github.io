<?php

include("con_db.php");

if(isset($_POST['send'])) {
    if(strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 ){
       $name  = trim($_POST['name']);
       $email = trim($_POST['email']);
       $datereg = date("m/d/y"); 
       $consult = "INSERT INTO datos(name, email, DateReg) VALUES ('$name','$email','datereg')"; 
       $resultado = mysqli_query($conex,$consulta);
       if($resultado) {
           ?>

        <h3 class="ok">El mensaje ha sido enviado correctamente</h3>

          <?php  
          }
          else{
            
            ?>

            <h3 class="ok">Ups, ha ocurrido un error</h3>
    
              <?php


          }else{
            
            ?>

            <h3 class="ok">Por favor, complete los campos</h3>
    
              <?php


          }





}
}



?> 