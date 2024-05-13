let mariaDB = []
let obj_serializado

function anadir(){
    
    var ide=$("#id").val();
    var desc=$("#desc").val();
    var proov=$("#proov").val();
    var prec=$("#prec").val();

    let obJson = {
        id:ide,
        descripcion:desc,
        idProov:proov,
        precio:prec     
    }
    if (sePuede(obJson)){

    mariaDB.push(obJson);

    obj_serializado = serializar(clientes);

    envio(obj_serializado)

    generarTabla();

    } else {
        alert("Alguno de los campos están vacios")
    }
}

function sePuede(objeto){
    let completo = false

    if (objeto.nombre!=null && objeto.nombre!="" && objeto.apellidos!=null && objeto.apellidos!="" && objeto.edad!=null && objeto.edad!="" && objeto.ciudad!=null && objeto.ciudad!="" ){
        completo = true
    }

    return completo
}

function serializar(objeto){
    return JSON.stringify(objeto);
}

function envio(objeto_js){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lm.iesnervion.es/reto4.php");
    xhr.responseType = "json";


    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 201) { // 200 || 201
            cosa=xhr.response      
            generarTabla(cosa);
            console.log(cosa);
        } else {
            console.log("Error: " + xhr.status);
        }
    };
    xhr.send(objeto_js);
}
function generarTabla() {

    $("#Tabla").html("")
    for (let i=0; i<mariaDB.length; i++){
        $("#Tabla").append("<tr id='lui' onclick=\"borrar("+i+")\">" +  //aquí está el append
            "<td>" + clientes[i].nombre + "</td>" +
            "<td>" + clientes[i].apellidos + "</td>" +
            "<td>" + clientes[i].edad + "</td>" +
            "<td>" + clientes[i].ciudad + "</td>" +
            "<td>" + listaHobbies + "</td></tr>");
    }
};
