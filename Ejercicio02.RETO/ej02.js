let obj_serializado

let obj_deserializado

let suma=0;

let media=0;

let max=0;

let min=999;

let contador=0;

function anadir(){
    
    var nombreObj=$("#nombre").val();
    var apellidosObj=$("#apellidos").val();
    var edadObj=$("#edad").val();
    var ciudadObj=$("#ciudad").val();

    let obJson = {
        nombre:nombreObj,
        apellidos:apellidosObj,
        edad:edadObj,
        ciudad:ciudadObj
    }
    if (sePuede(obJson)){
    obj_serializado = serializar(obJson);

    obj_deserializado = deserializar(obj_serializado);

    nuevaFila(obj_deserializado);

    calcula(obJson);

    } else {
        alert("Alguno de los campos están vacios")
    }
}

function serializar(objeto){
    return JSON.stringify(objeto);
}

function deserializar(objeto){
    return JSON.parse(objeto);
}

function nuevaFila(persona) {
    $("#Tabla").append("<tr onclick=\"borrar(this)\">" +  //aquí está el append
        "<td>" + persona.nombre + "</td>" +
        "<td>" + persona.apellidos + "</td>" +
        "<td>" + persona.edad + "</td>" +
        "<td>" + persona.ciudad + "</td>" +
        "</tr>")

     contador++;
};

function borrar(row){
    $(row).remove()
    contador--;
}

function sePuede(objeto){
    let completo = false

    if (objeto.nombre!=null && objeto.nombre!="" && objeto.apellidos!=null && objeto.apellidos!="" && objeto.edad!=null && objeto.edad!="" && objeto.ciudad!=null && objeto.ciudad!="" ){
        completo = true
    }

    return completo
}

function calcula(objeto){
    let num=objeto.edad

    suma += parseInt(num);
    
    media = suma/contador;

    if (max < num){
        max = num;
    }

    if (min > num){
        min = num;
    }


    $("#calculos").html(  //aquí está el append
        "<p> Suma: " + suma + "</p>" +
        "<p> Media: " + media + "</p>" +
        "<p> Edad máxima: " + max + "</p>" +
        "<p> Edad mínima: " + min + "</p>" 
        )
}
