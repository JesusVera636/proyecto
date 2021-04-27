
function validarNombre() {

    var nombre = document.getElementById('nombre_cuenta').value;
    if (nombre == "" || nombre == null) {
        return false
    } else {
        return true       
    }
    
}

function validarApellido() {

    var apellido = document.getElementById('apellido_cuenta').value;
    if (apellido == "" || apellido == null) {
        return false
    } else {
           
    }
    
}

function validarContra() {

    var contra = document.getElementById('contra_cuenta').value;
    var contra2 = document.getElementById('contra2_cuenta').value;

    if (contra == contra2) {
        return true
        
    } else {  
            
        return false
        
    }
    
}

function btn_registro() {
    

   if (validarContra()) {
       
   } else {
         
    
   }
          
}


$(document).ready(function(){

    $("#boton2").click(function(){
        succesAlert('Recibido', 'Felicidades')
    })
})

















var apellido = document.getElementById('apellido_cuenta').value;
var correo = document.getElementById('correo_cuenta').value;
var contra = document.getElementById('contra_cuenta').value;
var edad = document.getElementById('edad_cuenta').value;
var telefono = document.getElementById('telefono_cuenta').value;