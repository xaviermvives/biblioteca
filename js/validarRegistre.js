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
    var repeatpassword = document.getElementById("password2");

    if(motdepas.value == "" || motdepas.value.length < 6){
        document.getElementById("mensajeErrorPassword1").innerHTML= "Omple el camp amb un password de més de 6 caracters.";
        document.getElementById("password").className="error";
        document.getElementById("password").focus();
        return false;

    }else if (motdepas.value !== repeatpassword.value ){
        document.getElementById("mensajeErrorPassword2").innerHTML= "Els passwords no coincideixen.";
        document.getElementById("password2").className="error";
        document.getElementById("password").focus();
        return false;

    }else {
        return true;
    }
}

function validarCondicions(){
    var isChecked = document.getElementById('accept-terms').checked;
    if(! isChecked){
        alert("Cal acceptar les condicions");
        return false;
    }else {
        return true;
    }
}



function validar (e) {
    if ( validarEmail() && validarPassword() && validarCondicions()  ) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
}


