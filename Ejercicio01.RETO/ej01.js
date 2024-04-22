
let obj_serializado

let obj_deserializado

function anadir(){
    let obJson = {nombre: "Alberto",apellidos:"García",edad: 26,ciudad: "Granada"};

    obj_serializado = serializar(obJson);

    obj_deserializado = deserializar(obj_serializado);

    nuevaFila(obj_deserializado);

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

