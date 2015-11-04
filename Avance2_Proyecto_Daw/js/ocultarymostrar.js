var txtfecha1;
var txtfecha2;

function iniciar(){
var boton = document.getElementById("btndefinirrango");
 if(boton.addEventListener){
     boton.addEventListener("click", guardardatos, false);
}
}

function mostrar(){
    
    document.getElementById("formulario2").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';
    /*var comprobar;
    do{
    comprobar = guardardatos();
    }while(comprobar == false);*/
}

function guardardatos(){
    
   
    txtfecha1 = document.getElementById("txtrangoini").value;
    txtfecha2 = document.getElementById("txtrangofin").value;
    var salir = false;
    if(txtfecha2 < txtfecha1){
        var salir = false;
        alert("la fecha limite no puede ser mayor a la inicial");
    }
      
        else{
            var salir = true;
            mostrar();
            alert(txtfecha1 + " " + txtfecha2);
        }
}

//addevent listener para el evento load de la pagina
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
        window.attachEvent("onload", iniciar);
    }
    
