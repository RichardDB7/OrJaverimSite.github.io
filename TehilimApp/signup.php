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
        window.location.href = "http://localhost/Or%20Javerim%20Site/index.html";
      }, 2000);
      </script>';

    } else {
      $message = 'Lo siento, tu cuenta no ha sido creada...';
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>

    <!-- Basic Page Needs
    ================================================== -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Or Javerim</title>

    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">

    <!-- Mobile Specific Metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Varela" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">    


    <!-- Favicon
    ================================================== -->
    <link rel="apple-touch-icon" sizes="144x144" href="assets/img/OrJaverimLogo.jpg">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/OrJaverimLogo.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/OrJaverimLogo.jpg">
    <link rel="icon" sizes="16x16" href="assets/img/OrJaverimLogo.jpg">
    <link rel="manifest" href="assets/img/manifest.json">
    <link rel="mask-icon" href="assets/img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <!-- Stylesheets
    ================================================== -->
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />

    <!-- Font Awesome core CSS -->
    <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Main content -->
    <main id="main" class="site-main">

    <!-- Header -->
    <header id="masthead" class="site-header">
        <nav id="primary-navigation" class="site-navigation" data-spy="affix">
            <div class="container">
                <div class="navbar-header page-scroll">
                   
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <!-- Name -->
                    <div class="page-scroll site-logo">
                        <a href="http://localhost/Or%20Javerim%20Site">Or Javerim</a>
                        
                    </div>
                    

                </div><!-- /.navbar-header -->

                <div class="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">

                    <!-- Navigation -->
                    <ul class="nav navbar-nav navbar-right">

                        <li class="page-scroll"><a href="http://localhost/Or%20Javerim%20Site">Home</a></li>
                        <li class="page-scroll"><a href="http://localhost/Or%20Javerim%20Site/blog.html">Blog</a></li>
                        <li class="page-scroll"><a href="https://www.paypal.com/paypalme/paunvrr?country.x=ES&locale.x=es_ES"target="_blank">Tzedaká-Donar</a></li>

                        
                    </ul><!-- /.navbar-nav -->

                </div><!-- /.navbar-collapse -->
            </div>
        </nav><!-- /.primary-navigation -->
    </header><!-- /#header -->
    <!-- End Header -->



       <!-- Contact section --> 
       <section class="site-section section-contact" id="contact">
        <div class="container">
            <h2>Crea tu usuario</h2>
            <p class="section-subtitle"><span>Registrate</span></p>

            <?php if(!empty($message)): ?>
            <p class="section-subtitle"> <?= $message ?></p>
            <?php endif; ?>
            <div class="row">
                <form id="formlogin" action="signup.php" method="POST">

                    <div class="col-sm-12">
                        <input class="form-control" name="email" type="text" placeholder="&#129333; Ingresa tu Email"id="usuario" placeholder="Nombre" required style="text-align: center;>
                    </div>
                    <div class="col-sm-12">
                        <input class="form-control" name="password" placeholder="&#128272; Ingresa tu clave" id="pass" required style="text-align: center;>
                    </div>
                    <div class="col-sm-12">
                        <input class="form-control" name="confirm_password" placeholder="&#128272; Repite tu clave" id="pass" required style="text-align: center;>
                    </div>
                    <div class="col-sm-12">
                        <button class="btn btn-inverted" type="submit"  value="Enviar" >Crear usuario</button>
                    </div>  
                    
                </form>
                
            </div>
        </div>
    </section><!-- /.section-contact-->
    <!-- End Contacts section --> 
    <div class="container text-center">
        <p class="copyright">&copy; <a href="" target="_blank">Or Javerim</a> - 2023</p>
    </div>

</footer><!-- /#footer -->
<!-- End Footer --> 

  </body>
</html>