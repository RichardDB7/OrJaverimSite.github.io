
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
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

    <!-- Font Awesome core CSS -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
        
</head>
<body>

    

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
                        <a href="index.html">Or Javerim</a>
                        
                    </div>
                    

                </div><!-- /.navbar-header -->

                <div class="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">

                    <!-- Navigation -->
                    <ul class="nav navbar-nav navbar-right">

                        <li class="page-scroll"><a href="http://localhost/Or%20Javerim%20Site">Home</a></li>
                        <li class="page-scroll"><a href="blog.html">Blog</a></li>
                        <li class="page-scroll"><a href="https://www.paypal.com/paypalme/paunvrr?country.x=ES&locale.x=es_ES"target="_blank">Tzedaká-Donar</a></li>

                        
                    </ul><!-- /.navbar-nav -->

                </div><!-- /.navbar-collapse -->
            </div>
        </nav><!-- /.primary-navigation -->
    </header><!-- /#header -->
    <!-- End Header -->

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

<?php require 'TehilimApp/partials/header.php' ?>


      <!-- Main content -->
      <main id="main" class="site-main">

        <!-- Contact section --> 
        <section class="site-section section-contact" id="contact">
          <div class="container">
              <h2>Ingreso</h2>
              <p class="section-subtitle"><span>Seccion Usuarios</span></p>

              <?php if(!empty($message)): ?>
            <p class="section-subtitle"> <?= $message ?></p>
              <?php endif; ?>
              <div class="row">
                  <form id="formlogin" action="FormLogin.php" method="POST">

                      <div class="col-sm-12">
                          <input class="form-control" name="email" type="text" placeholder="&#129333; Escriba su Usuario"id="usuario" placeholder="Nombre" required style="text-align: center;autocomplete="off">
                      </div>
                      <div class="col-sm-12">
                          <input class="form-control" name="password" placeholder="&#128272; Escriba su Clave" id="pass" required style="text-align: center;autocomplete="off">
                      </div>
                      
                      <div class="col-sm-12">
                          <button class="btn btn-inverted" type="submit"  value="Enviar" >Ingresa</button>
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
           


         
        
            
    
                
          
   

    

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- jQuery core js | Do not Delete -->
    <script src="assets/js/jquery.min.js"></script>

    <!-- Bootstrap core js | Do not Delete -->
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Bootstrap progressbar JS -->
    <script src="assets/js/bootstrap-progressbar.min.js"></script>

    <!-- Count To JS -->
    <script src="assets/js/jquery.countTo.min.js"></script>

    <!-- Easing JS -->
    <script src="assets/js/jquery.easing.min.js"></script>

    <!-- Shuffle JS -->
    <script src="assets/js/jquery.shuffle.min.js"></script>

    <!-- Slick Carousel JS -->
    <script src="assets/js/slick.min.js"></script>

    <!-- Touchswipe JS -->
    <script src="assets/js/touchswipe.min.js"></script>

    <!-- Custom JS -->
    <script src="assets/js/script.js"></script>
    
    <!-- Particles Js -->
    <script src="assets/js/particles.min.js"></script>
    <script src="assets/js/app.js"></script>

    <!-- Modals JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>   
  
     <!-- Form Data -->
    <script>
        var xhr = new XMLHttpRequest();
        var data = document.getElementById('formfoot');
        
        function limpiarFormulario() {document.getElementById('formfoot').reset();}
        
        function borrarMensaje() {
          setTimeout(function() {
            document.getElementById('respuesta').innerHTML = '';
          }, 2500);
        }
        
        data.addEventListener('submit', function(ev) {
          ev.preventDefault();
          
          var form = new FormData(data);
        
          xhr.open('POST', 'send.php');
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log("Conexión establecida" + " " + xhr.status);
              console.log(xhr.responseText);
              document.getElementById('respuesta').innerHTML = xhr.responseText;
              limpiarFormulario();
              borrarMensaje();
            } else {
              console.log("Error en la petición" + xhr.status);
            }
          };
        
          xhr.send(form);
        });
        

    </script>   

    <!---->

</body>

</html>

