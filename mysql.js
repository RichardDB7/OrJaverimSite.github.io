// Function captures data form

// function capture(){

//     const name = document.getElementById("Nm").value;
//     const email = document.getElementById("Em").value;
//     const aspect = document.getElementById("Cs").value;
//     const message = document.getElementById("Ms").value;
//     console.log(Nm);
//     console.log(Em);
//     console.log(Cs);
//     console.log(Ms);
// }

    // var formfoot = document.getElementById('formfoot'); 
    
    // formfoot.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     console.log('haz hecho click')

    //     var datos = new FormData(formfoot);
    //     console.log(datos);
    //     console.log(datos.get('user'))
    //     console.log(datos.get('email'))

    //     fetch('post.php',{
    //         method:'POST',
    //         body:datos
    //     })
    //     .then( res => res.text())
    //     .then( data =>{
    //         console.log(data);
    //     })
    // })

//const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'ricardo',
//     password:'ricardo',
//     database:'usuarios'
// })

// connection.connect( (err) =>{
//     if(err) throw err
//     console.log('Connection is ready')
// })

// class contact{
//     constructor(oConfig){
//         this.oConfig = oConfig;
//     }
    
//     addUser(name,email){

//     var con = mysql.createConnection(this.oConfig);
//     con.connect(function(error){
//         try{
//             if(error){
//                 console.log("error")
//             }else{
//                 console.log("Connection-ok");
//                 con.query("SELECT COUNT(*) AS USUARIO FROM USUARIOS", function(err,res,field){
//                     if(error){
//                         console.log("Error en select BD" + console.error());
//                     }else{
//                         console.log("Usuarios encontrados: " + res[0].user);
//                         if(parseInt(res[0].user) ==0 ){
                            
//                             con.query(`INSERT INTO users (name, email) values('${name}','${email}')` 
//                             ,function(err,res,field){
//                                 if(error){
//                                     console.log("Error al insertar un nuevo user en BD" + console.error());
//                                 }else{
//                                     console.log("New user registered");
//                                 }


                            
                        
//                 }};
//                 });
//             }

//         }catch(x){
//             console.log("Contact.addUser.connect --Error--"+ x)
//         }

//     } );

//     }
// } 
// module.exports = contact;

