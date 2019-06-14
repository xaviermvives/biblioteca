window.onload = iniciar;

function iniciar () {
    document.getElementById("enviar").addEventListener('click', validarBuscar, false);
}


function validarBuscar(e){
    var buscar = document.getElementById('buscar')
    var buscarValue = buscar.value;
    var errorMissatge = document.getElementById("mysearchhint");
    if(buscarValue !== "" && buscarValue.length > 3){
        return true;
    }else{
        e.preventDefault();
        errorMissatge.innerHTML = "La cerca és obligatòria i ha de tenir més de tres caràcters";
        buscarValue = "";
        buscar.className="error";
        buscar.focus();
        return false;

    }
}






