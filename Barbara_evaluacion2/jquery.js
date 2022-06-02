$(document).ready(function(){



    $("#alertaNombre").hide();
    $("#nombre").focusout( function(){
        if($("#nombre").val().trim().length<3){
            $("#alertaNombre").show()
        }
        else{
            $("#alertaNombre").hide()
        }
    });

    $("#alertaApellido").hide();
    $("#apellidos").focusout( function(){
        if($("#apellidos").val().trim().length<3){
            $("#alertaApellido").show()
        }
        else{
            $("#alertaApellido").hide()
        }
    })

    $("#alertaRut").hide();
    $("#rut").focusout(function(){
            
            if(($("#rut").val().trim().length==9 || $("#rut").val().trim().length==10)&&  $("#rut").val().trim().includes("-")){
                $("#alertaRut").hide()
            }
            else{
                $("#alertaRut").show()
            }
    })

    $("#alertaFono").hide();
    $("#telefono").focusout(function(){
            
        if(($("#telefono").val().trim().length==9 &&  $("#telefono").val().trim().startsWith("9"))){
            $("#alertaFono").hide()
        }
        else{
            $("#alertaFono").show()
        }
    })



});





   
    /** 
     * Esqueleto para hacer la impresion de los datos en Jquery 
     * let confirmation = confirm ("El formulario ha sido completado correctamente ")

     $("#btn_guardar").click(function(){

        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var rut = $("#rut").val();
        var telefono = $("#telefono").val();
        var email = $("email").val();

        var guardar = ("Nombre:", nombre)
        
        $("#resultado").val(guardar)

    })*/ 
    
