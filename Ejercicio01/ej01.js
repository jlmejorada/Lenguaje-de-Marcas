
let obj_serializado

let obj_deserializado

function anadir(){
    let obJson = {nombre: "Alberto",apellidos:"García",edad: 26,ciudad: "Granada"};
    obj_serializado = serializar(obJson);
    console.log(obj_serializado);
    obj_deserializado = deserializar(obj_serializado);
    console.log(obj_deserializado);

    let texto = "Nombre:" + obj_deserializado.nombre;
    texto += ", Apellidos:" + obj_deserializado.apellidos; 
    texto += ", Edad:" + obj_deserializado.edad;
    texto += ", Ciudad:" + obj_deserializado.ciudad; 
    console.log("Recuperado: " + texto);
    $("#deserializado").text("Recuperado: " + texto);

}

function serializar(objeto){
    return JSON.stringify(objeto);
}

function deserializar(objeto){
    return JSON.parse(objeto);
}