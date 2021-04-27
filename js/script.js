
function validarNombre() {

    var nombre = document.getElementById('nombre_cuenta').value;

    if (nombre == "" || nombre == null) {
        return false
    } 

    else if (nombre.length > 12 ||  nombre.length < 2) {
        $("#alerta2").html("<div class='alert alert-danger' role='alert'> El caracter minimo nombre es 2  y maximo 12.</div> ")
        
    }

    else {
        $("#alerta2").html("")
        return true
    }
    
}

function validarApellido() {

    var apellido = document.getElementById('apellido_cuenta').value;

    if (apellido == "" || apellido == null) {
        return false
    } 

    else if (apellido.length > 12 || apellido.length < 2) {
        $("#alerta2").html("<div class='alert alert-danger' role='alert'> El caracter minimo de apellido es 2  y maximo 12.</div> ")
    }
    else {
        $("#alerta2").html("")
        return true;
    }
    
    
}

function validarCamposContra() {

    var contra = document.getElementById('contra_cuenta').value;
    var contra2 = document.getElementById('contra2_cuenta').value;

    if (contra == "" || contra2 == "" ) {
        
        return false;            
    }
    
    return true;
}

function validarContra() {

    var contra = document.getElementById('contra_cuenta').value;
    var contra2 = document.getElementById('contra2_cuenta').value;

    if (contra == contra2) {
        $("#alerta2").html("")
        return true;
        
    } 
    
    else {
        return false;
    }
}

function validarEmail() {

    var correo = document.getElementById('correo_cuenta').value;

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)){
        return true;
       }
    
    else if (correo =="" || correo == null){
        return false;
    }  

    else  {
        $("#alerta2").html("<div class='alert alert-warning' role='alert'> El correo electronico es incorrecto</div> ")
       }
}



function limpiarCampos() {

    var nombre = document.getElementById('nombre_cuenta').value ="";
    var apellido = document.getElementById('apellido_cuenta').value="";
    var contra = document.getElementById('contra_cuenta').value="";
    var contra2 = document.getElementById('contra2_cuenta').value="";
    var correo = document.getElementById('correo_cuenta').value="";
    var edad = document.getElementById('edad_cuenta').value="";
    var telefono = document.getElementById('telefono_cuenta').value="";
    

}

function btn_registro() {

    if (validarNombre() == false) {
        $("#alerta").html("<div class='alert alert-warning' role='alert'> Falta el campo de <b> Nombre </b> </div> ")   
         
    } else if (validarApellido() == false) {
        $("#alerta").html("<div class='alert alert-warning' role='alert'> Falta el campo de <b> Apellido </b>  </div> ")

    } else if (validarCamposContra() == false) {
        $("#alerta").html("<div class='alert alert-warning' role='alert'> Falta uno de los campos de <b> Contraseña </b> </div> ") 

    } else if (validarContra()== false){
        $("#alerta2").html("<div class='alert alert-danger' role='alert'> Las contraseñas no son iguales , intentalo de nuevo.</div> ")

    } else if (validarEmail() == false) {
        $("#alerta").html("<div class='alert alert-warning' role='alert'> Falta el campo de <b> Correo Electronico </b> </div> ")
    } 
    else if (validarNombre() == true && validarApellido() ==true && validarCamposContra() == true &&validarEmail()==true ){
        $("#alerta").html("<div class='alert alert-success' role='alert'> Su registro de usuario ha sido creado <b> exitosamente </b> </div> ")
        limpiarCampos()
        
    }
    

          
}

function iniciarSesion() {

    $(document).ready(function(){
        $("#boton_sesion").click(function(){
          $("#myModal").modal();
        });
      });
    
}















