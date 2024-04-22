
let obj_serializado

let obj_deserializado

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

    obj_serializado = serializar(obJson);

    obj_deserializado = deserializar(obj_serializado);

    nuevaFila(obJson);

}



function serializar(objeto){
    return JSON.stringify(objeto);
}

function deserializar(objeto){
    return JSON.parse(objeto);
}

function nuevaFila(persona) {
    $("#Tabla").append("<tr>" +  //aquí está el append
        "<td>" + persona.nombre + "</td>" +
        "<td>" + persona.apellidos + "</td>" +
        "<td>" + persona.edad + "</td>" +
        "<td>" + persona.ciudad + "</td>" +
        "</tr>")
};

