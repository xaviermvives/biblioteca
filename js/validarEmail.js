window.onload = iniciar;

function iniciar () {
    document.getElementById("enviar").addEventListener('click', validar, false);
}


function validarEmail(){
    var elemento = document.getElementById("email");
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(elemento.value === ""){
        error2(elemento);
        return false;
    }else if(!regex.test(elemento.value)){
        error(elemento);
        return false;
    }else {
        return true;
    }
    
}

function error (elemento) {
    document.getElementById("mensajeErrorEmail").innerHTML= "Email incorrecte, torna";
    elemento.className="error";
    elemento.focus();
}

function error2(elemento) {
    document.getElementById("mensajeErrorEmail").innerHTML = "Omple el camp email";
    elemento.className="error";
    elemento.focus();
}

function validarPassword () {
    var motdepas = document.getElementById("password");
    if(motdepas.value == ""){
        document.getElementById("mensajeErrorPassword").innerHTML= "Omple el camp amb el password.";
        document.getElementById("password").className="error";
        document.getElementById("password").focus();
    }else{
        return true;
    }
}


function validar (e) {
    if ( validarEmail() && validarPassword()  ) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
}


