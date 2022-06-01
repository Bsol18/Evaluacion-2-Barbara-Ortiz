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
    $("#rut").focusout( function(){
            
            if(($("#rut").val().trim().length==9 || $("#rut").val().trim().length==10)&&  $("#rut").val().trim().includes("-")){

            
                $("#alertaRut").hide()
            }
            
            else{
                $("#alertaRut").show()

            }
    })

    $("#alertaFono").hide();
    $("#telefono").focusout( function(){
            
            if(($("#telefono").val().trim().length==9 &&  $("#telefono").val().trim().startsWith("9"))){

            
                $("#alertaFono").hide()
            }
            
            else{
                $("#alertaFono").show()

            }
    })
 
    

   

   
});



     /** function validar()
    {
        var nombre = document.formulario.nombre.value
        var apellidos = document.formulario.apellidos.value
        /** var genero= document.formulario.genero.value 
        var correo = document.formulario.txt_correo.value
        var rut = document.formulario.rut.value
        var telefono = document.formulario.telefono.value
        var comuna = document.formulario.comuna.value
        var mensaje = document.formulario.mensaje.value



       if (rut.length<9 || rut.length>10)
        {
            alert("RUT debe tener entre 9 y 10 caracteres")
            document.formulario.txt_rut.focus()
            return false
        }
        if (nombre.length<2)
        {
            alert("Nombre debe tener 2 o más caracteres")
            document.formulario.txt_nombre.focus()
            return false
        }
        if (edad<18 || edad>65)
        {
            alert("Edad debe ser entre 18 y 65")
            document.formulario.txt_edad.focus()
            return false
        }
        if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
        {
            alert("Debe ingresar un correo correcto")
            document.formulario.txt_correo.focus()
            return false
        }*/


    
